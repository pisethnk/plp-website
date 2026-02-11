import { Pool, QueryResult } from 'pg';

let writePool: Pool | null = null;

export function getWritePool(): Pool {
  if (!writePool) {
    const databaseWriteUrl = process.env.DATABASE_WRITE_URL;

    if (!databaseWriteUrl) {
      throw new Error('DATABASE_WRITE_URL environment variable is not set');
    }

    writePool = new Pool({
      connectionString: databaseWriteUrl,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    writePool.on('error', (err) => {
      console.error('Unexpected error on idle write pool client', err);
    });
  }

  return writePool;
}

export async function executeWriteQuery(
  sql: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any[] = []
): Promise<QueryResult> {
  const pool = getWritePool();
  const client = await pool.connect();

  try {
    const result = await client.query(sql, params);
    return result;
  } finally {
    client.release();
  }
}
