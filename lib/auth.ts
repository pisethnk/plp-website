import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcryptjs';
import { executeWriteQuery } from './db/postgres';

export interface UserSession {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: 'super_admin' | 'province_admin' | 'school_staff' | 'viewer';
  roleTitle?: string;
  gender?: string;
  province?: string;
  schoolId?: number;
}

declare module 'next-auth' {
  interface Session {
    user: UserSession;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends UserSession {}
}

declare module 'next-auth/jwt' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends UserSession {}
}

const PLP_API_URL = 'https://plp-api.moeys.gov.kh/api/v1/auth/login';
const PLP_QR_LOGIN_URL = 'https://plp-api.moeys.gov.kh/api/v1/auth/qr-login';
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;

function mapExternalRole(roleEn: string): UserSession['role'] {
  switch (roleEn) {
    case 'ADMIN':
    case 'SUPER_ADMIN':
      return 'super_admin';
    case 'PROVINCIAL_OFFICER':
      return 'province_admin';
    case 'TEACHER':
    case 'PRINCIPAL':
    case 'DEPUTY_PRINCIPAL':
    case 'SCHOOL_SECRETARY':
    case 'SCHOOL_TREASURER':
    case 'SCHOOL_LIBRARIAN':
    case 'SCHOOL_WORKSHOP':
    case 'SCHOOL_SECURITY':
    case 'TEACHER_ICT':
    case 'NON_TEACHING_STAFF':
      return 'school_staff';
    case 'STUDENT':
    case 'PARENT':
      return 'viewer';
    default:
      return 'viewer';
  }
}

function mapRoleToTable(roleEn: string): string | null {
  const mapping: Record<string, string> = {
    'TEACHER': 'teachers',
    'PRINCIPAL': 'principals',
    'DEPUTY_PRINCIPAL': 'deputy_principals',
    'SCHOOL_SECRETARY': 'school_secretaries',
    'SCHOOL_TREASURER': 'school_treasurers',
    'SCHOOL_LIBRARIAN': 'school_librarians',
    'SCHOOL_WORKSHOP': 'school_workshops',
    'SCHOOL_SECURITY': 'school_security',
    'TEACHER_ICT': 'teachers_ict',
    'NON_TEACHING_STAFF': 'non_teaching_staff',
    'STUDENT': 'students',
    'PARENT': 'parents',
    'ADMIN': 'admins',
    'PROVINCIAL_OFFICER': 'provincial',
  };
  return mapping[roleEn] || null;
}

async function lookupUserGender(userId: number, roleEn: string): Promise<string | undefined> {
  const table = mapRoleToTable(roleEn);
  if (!table || !userId) return undefined;
  try {
    const result = await executeWriteQuery(
      `SELECT gender FROM ${table} WHERE id = $1`,
      [userId]
    );
    if (result.rows.length > 0) return result.rows[0].gender;
  } catch {
    // Table may not have gender column or user not found
  }
  return undefined;
}

async function lookupUserDetails(userId: number): Promise<{ gender?: string; roleTitle?: string }> {
  if (!userId) return {};
  try {
    const result = await executeWriteQuery(
      `SELECT gender, 'TEACHER' as role_title FROM teachers WHERE id = $1
       UNION ALL SELECT gender, 'PRINCIPAL' FROM principals WHERE id = $1
       UNION ALL SELECT gender, 'DEPUTY_PRINCIPAL' FROM deputy_principals WHERE id = $1
       UNION ALL SELECT gender, 'TEACHER_ICT' FROM teachers_ict WHERE id = $1
       UNION ALL SELECT gender, 'SCHOOL_SECRETARY' FROM school_secretaries WHERE id = $1
       UNION ALL SELECT gender, 'STUDENT' FROM students WHERE id = $1
       UNION ALL SELECT gender, 'PARENT' FROM parents WHERE id = $1
       LIMIT 1`,
      [userId]
    );
    if (result.rows.length > 0) {
      return { gender: result.rows[0].gender, roleTitle: result.rows[0].role_title };
    }
  } catch {}
  return {};
}

async function isAccountLocked(username: string): Promise<boolean> {
  const result = await executeWriteQuery(
    `SELECT locked_until FROM users WHERE username = $1`,
    [username]
  );
  if (result.rows.length === 0) return false;
  const lockedUntil = result.rows[0].locked_until;
  if (!lockedUntil) return false;
  return new Date(lockedUntil) > new Date();
}

async function recordFailedAttempt(username: string): Promise<void> {
  await executeWriteQuery(
    `UPDATE users
     SET failed_login_attempts = COALESCE(failed_login_attempts, 0) + 1,
         locked_until = CASE
           WHEN COALESCE(failed_login_attempts, 0) + 1 >= $2
           THEN NOW() + INTERVAL '${LOCKOUT_MINUTES} minutes'
           ELSE locked_until
         END,
         updated_at = NOW()
     WHERE username = $1`,
    [username, MAX_FAILED_ATTEMPTS]
  );
}

async function resetFailedAttempts(username: string): Promise<void> {
  await executeWriteQuery(
    `UPDATE users SET failed_login_attempts = 0, locked_until = NULL, updated_at = NOW() WHERE username = $1`,
    [username]
  );
}

async function authenticateWithExternalAPI(
  username: string,
  password: string
): Promise<UserSession | null> {
  const response = await fetch(PLP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const apiUser = data.user;
  if (!apiUser) return null;

  const role = mapExternalRole(apiUser.roleEn || '');
  let province: string | undefined;
  const schoolId: number | undefined = apiUser.schoolId || undefined;

  if (schoolId) {
    try {
      const result = await executeWriteQuery(
        `SELECT province_name_en FROM schools WHERE school_id = $1`,
        [schoolId]
      );
      if (result.rows.length > 0) {
        province = result.rows[0].province_name_en;
      }
    } catch (err) {
      console.error('Failed to look up province for schoolId:', schoolId, err);
    }
  }

  const fullNameKh = [apiUser.firstName, apiUser.lastName].filter(Boolean).join(' ') || null;
  const fullName = apiUser.username;
  const email = apiUser.email || null;

  const passwordHash = await hash(password, 10);

  const externalId = apiUser.id ? Number(apiUser.id) : null;
  const roleTitle = apiUser.roleEn || undefined;

  const gender = externalId && roleTitle
    ? await lookupUserGender(externalId, roleTitle)
    : undefined;

  await executeWriteQuery(
    `INSERT INTO users (username, email, full_name, full_name_kh, password_hash, role, province, school_id, user_id, is_active, last_login, failed_login_attempts, locked_until)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, true, NOW(), 0, NULL)
     ON CONFLICT (username)
     DO UPDATE SET email = EXCLUDED.email, full_name = EXCLUDED.full_name,
       full_name_kh = EXCLUDED.full_name_kh,
       password_hash = CASE
         WHEN users.user_id IS NOT NULL THEN EXCLUDED.password_hash
         ELSE COALESCE(users.password_hash, EXCLUDED.password_hash)
       END,
       role = EXCLUDED.role, province = EXCLUDED.province, school_id = EXCLUDED.school_id,
       user_id = COALESCE(EXCLUDED.user_id, users.user_id),
       last_login = NOW(), failed_login_attempts = 0, locked_until = NULL, updated_at = NOW()
     RETURNING id`,
    [apiUser.username, email, fullName, fullNameKh, passwordHash, role, province || null, schoolId || null, externalId]
  );

  return {
    id: String(externalId || apiUser.username),
    username: apiUser.username,
    email: email || '',
    fullName: fullNameKh || fullName,
    role,
    roleTitle,
    gender,
    province,
    schoolId,
  };
}

async function authenticateWithLocalDB(
  username: string,
  password: string
): Promise<UserSession | null> {
  const result = await executeWriteQuery(
    `SELECT id, username, email, password_hash, full_name, full_name_kh, role, province, school_id, user_id
     FROM users
     WHERE username = $1 AND is_active = true`,
    [username]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const user = result.rows[0];

  if (!user.password_hash) {
    return null;
  }

  const isValidPassword = await compare(password, user.password_hash);
  if (!isValidPassword) {
    return null;
  }

  await executeWriteQuery(
    `UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1`,
    [user.id]
  );

  const externalUserId = user.user_id || user.id;
  const details = await lookupUserDetails(Number(externalUserId));

  return {
    id: String(externalUserId),
    username: user.username,
    email: user.email || '',
    fullName: user.full_name_kh || user.full_name,
    role: user.role,
    roleTitle: details.roleTitle,
    gender: details.gender,
    province: user.province,
    schoolId: user.school_id,
  };
}

async function authenticateWithQRToken(
  qrToken: string
): Promise<UserSession | null> {
  const response = await fetch(`${PLP_QR_LOGIN_URL}/${qrToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const apiUser = data.user;
  if (!apiUser) return null;

  const role = mapExternalRole(apiUser.roleEn || '');
  let province: string | undefined;
  const schoolId: number | undefined = apiUser.schoolId || undefined;

  if (schoolId) {
    try {
      const result = await executeWriteQuery(
        `SELECT province_name_en FROM schools WHERE school_id = $1`,
        [schoolId]
      );
      if (result.rows.length > 0) {
        province = result.rows[0].province_name_en;
      }
    } catch (err) {
      console.error('Failed to look up province for schoolId:', schoolId, err);
    }
  }

  const fullNameKh = [apiUser.firstName, apiUser.lastName].filter(Boolean).join(' ') || null;
  const fullName = apiUser.username;
  const email = apiUser.email || null;

  const externalId = apiUser.id ? Number(apiUser.id) : null;
  const roleTitle = apiUser.roleEn || undefined;

  const gender = externalId && roleTitle
    ? await lookupUserGender(externalId, roleTitle)
    : undefined;

  await executeWriteQuery(
    `INSERT INTO users (username, email, full_name, full_name_kh, role, province, school_id, qr_token, user_id, is_active, last_login, failed_login_attempts, locked_until)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, true, NOW(), 0, NULL)
     ON CONFLICT (username)
     DO UPDATE SET email = EXCLUDED.email, full_name = EXCLUDED.full_name,
       full_name_kh = EXCLUDED.full_name_kh,
       role = EXCLUDED.role, province = EXCLUDED.province, school_id = EXCLUDED.school_id,
       qr_token = EXCLUDED.qr_token,
       user_id = COALESCE(EXCLUDED.user_id, users.user_id),
       last_login = NOW(), failed_login_attempts = 0, locked_until = NULL, updated_at = NOW()
     RETURNING id`,
    [apiUser.username, email, fullName, fullNameKh, role, province || null, schoolId || null, qrToken, externalId]
  );

  return {
    id: String(externalId || apiUser.username),
    username: apiUser.username,
    email: email || '',
    fullName: fullNameKh || fullName,
    role,
    roleTitle,
    gender,
    province,
    schoolId,
  };
}

async function authenticateWithLocalQR(
  qrToken: string
): Promise<UserSession | null> {
  const result = await executeWriteQuery(
    `SELECT id, username, email, full_name, full_name_kh, role, province, school_id, user_id
     FROM users
     WHERE qr_token = $1 AND is_active = true`,
    [qrToken]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const user = result.rows[0];

  await executeWriteQuery(
    `UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1`,
    [user.id]
  );

  const externalUserId = user.user_id || user.id;
  const details = await lookupUserDetails(Number(externalUserId));

  return {
    id: String(externalUserId),
    username: user.username,
    email: user.email || '',
    fullName: user.full_name_kh || user.full_name,
    role: user.role,
    roleTitle: details.roleTitle,
    gender: details.gender,
    province: user.province,
    schoolId: user.school_id,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        qrToken: { label: 'QR Token', type: 'text' },
      },
      async authorize(credentials) {
        // QR Token login flow
        if (credentials?.qrToken) {
          let qrToken = credentials.qrToken.trim();
          try {
            const parsed = JSON.parse(qrToken);
            if (parsed.qrToken) {
              qrToken = parsed.qrToken;
            } else if (parsed.qr_token) {
              qrToken = parsed.qr_token;
            }
          } catch {}
          try {
            const qrUser = await authenticateWithQRToken(qrToken);
            if (qrUser) {
              console.log(`[Auth] QR login success: ${qrUser.username} (role: ${qrUser.role})`);
              return qrUser;
            }
          } catch (error) {
            console.error('[Auth] QR external API error, falling back to local DB:', error);
          }

          try {
            const localQrUser = await authenticateWithLocalQR(qrToken);
            if (localQrUser) {
              console.log(`[Auth] QR local DB login success: ${localQrUser.username} (role: ${localQrUser.role})`);
              return localQrUser;
            }
          } catch (error) {
            console.error('[Auth] QR local DB error:', error);
          }

          console.log('[Auth] QR login failed: invalid token');
          return null;
        }

        // Password login flow
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Username and password are required');
        }

        const { username, password } = credentials;

        if (await isAccountLocked(username)) {
          console.log(`[Auth] Account locked: ${username}`);
          throw new Error(`Account locked. Try again in ${LOCKOUT_MINUTES} minutes.`);
        }

        try {
          const externalUser = await authenticateWithExternalAPI(username, password);
          if (externalUser) {
            console.log(`[Auth] External API login success: ${externalUser.username} (role: ${externalUser.role})`);
            return externalUser;
          }
        } catch (error) {
          console.error('[Auth] External API error, falling back to local DB:', error);
        }

        try {
          const localUser = await authenticateWithLocalDB(username, password);
          if (localUser) {
            await resetFailedAttempts(username);
            console.log(`[Auth] Local DB login success: ${localUser.username} (role: ${localUser.role})`);
            return localUser;
          }
        } catch (error) {
          console.error('[Auth] Local DB auth error:', error);
        }

        await recordFailedAttempt(username).catch(() => {});
        console.log(`[Auth] Login failed for: ${username}`);
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60,
  },
  pages: {
    signIn: '/home',
    error: '/home',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
        token.roleTitle = user.roleTitle;
        token.gender = user.gender;
        token.province = user.province;
        token.schoolId = user.schoolId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.id && token.username && token.role) {
        session.user = {
          id: token.id,
          username: token.username,
          email: token.email || '',
          fullName: token.fullName || token.username,
          role: token.role,
          roleTitle: token.roleTitle,
          gender: token.gender,
          province: token.province,
          schoolId: token.schoolId,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
