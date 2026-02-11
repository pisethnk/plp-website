# TODOS.md

Roadmap to turn the PLP website from its current demo/showcase state into a completed production product.

**Current state:** ~65% complete. Excellent UI/UX design, working authentication (password + QR), responsive layouts, and navigation. However, all page data is hardcoded/mock, there are zero custom API endpoints, no test coverage, and several security gaps.

---

## P0 — Critical (Before Any Deployment)

### Security

- [ ] Remove credentials from `.env.local` and use a secure secret manager
- [ ] Generate a strong `NEXTAUTH_SECRET` (e.g. `openssl rand -base64 32`)
- [ ] Extract hardcoded values in `lib/auth.ts` to environment variables:
  - `PLP_API_URL` (line 32)
  - `PLP_QR_LOGIN_URL` (line 33)
  - `MAX_FAILED_ATTEMPTS` (line 34)
  - `LOCKOUT_MINUTES` (line 35)
  - Session `maxAge` (line 473)
- [ ] Add security headers in `next.config.mjs` (CSP, X-Frame-Options, HSTS, etc.)
- [ ] Encrypt QR tokens before storing in database (currently plain text)
- [ ] Add timeout enforcement on external API `fetch()` calls in `lib/auth.ts`
- [ ] Add CORS/CSRF protection for API routes
- [ ] Add rate limiting on `/api/auth` endpoints to prevent brute force

### Auth Bug Fixes

- [ ] Fix incomplete UNION query in `lookupUserDetails()` (`lib/auth.ts`) — missing 7 role tables: `school_treasurers`, `school_librarians`, `school_workshops`, `school_security`, `non_teaching_staff`, `admins`, `provincial`
- [ ] Replace silent `catch {}` blocks in auth flows with proper error logging
- [ ] Add input validation on external API response shape before accessing fields

---

## P1 — High Priority (Core Functionality)

### Database

- [ ] Implement read pool in `lib/db/postgres.ts` (currently only write pool exists; all queries hit the write DB)
- [ ] Add database health check endpoint or startup verification
- [ ] Add query logging for debugging and audit trails
- [ ] Create database migration system (e.g. `node-pg-migrate` or `prisma migrate`)
- [ ] Define and version-control full schema for: `users`, `schools`, `teachers`, `principals`, `students`, `parents`, and all other role tables

### API Endpoints (currently zero custom endpoints)

- [ ] `GET /api/statistics/survey` — survey metrics, challenges, provincial comparisons
- [ ] `GET /api/statistics/census` — school counts, distribution by province, infrastructure access
- [ ] `GET /api/statistics/teachers` — teacher/student ratios, recruitment gaps, vacancies
- [ ] `GET /api/events` — list events/missions with filtering
- [ ] `GET /api/resources` — list learning resources with search/filter
- [ ] `GET /api/news` — news articles for homepage
- [ ] `GET /api/user/profile` — current user profile
- [ ] `PUT /api/user/profile` — update profile
- [ ] `POST /api/user/password` — change password
- [ ] `POST /api/admin/unlock-account` — unlock locked user accounts

### Replace Hardcoded Page Data with API Integration

- [ ] **Home page** (`app/home/page.tsx`) — replace all mock data:
  - Hero statistics (3.2M students, 94.5K teachers, 13.8K schools)
  - News articles array (3 hardcoded items)
  - Engagement events (2 hardcoded items)
  - Video highlights (3 hardcoded items)
  - Enrollment chart data
  - Regional performance/efficiency metrics
- [ ] **Events page** (`app/events/page.tsx`) — replace mock data:
  - `missionData` array (4 hardcoded missions)
  - Calendar events (hardcoded April 2024)
  - Video archive items
  - Leadership activities
- [ ] **Resources page** (`app/resources/page.tsx`) — replace mock data:
  - Digital library cards (3 hardcoded)
  - Assessment archive items (3 hardcoded)
  - Curriculum items (2 hardcoded)
- [ ] **Survey stats page** (`app/statistics/survey/page.tsx`) — replace mock data:
  - Survey metric cards (class size, ratio, textbook, meals)
  - Challenges bar chart data
  - Provincial comparison values
- [ ] **Census stats page** (`app/statistics/census/page.tsx`) — replace mock data:
  - School totals (7,240 schools, urban/rural/floating split)
  - Distribution by province table
  - Infrastructure access percentages (electricity 85%, water 72%, internet 40%)
- [ ] **Teachers stats page** (`app/statistics/teachers/page.tsx`) — replace mock data:
  - Province teacher/student counts (6 provinces)
  - Recruitment gap table
  - Summary metrics (vacancies, in-progress, completed)

---

## P2 — Important (Complete Features)

### Wire Up Non-Functional UI Elements

- [ ] **Language toggle** (GovBar) — implement actual i18n; currently Khmer/English buttons do nothing. Options: `next-intl`, `next-i18next`, or custom context-based approach
- [ ] **Search** (GovBar + Resources page) — implement site-wide and resource search with query handler
- [ ] **Event filters** (Events page) — wire up "School Inspections", "Regional Visits", etc. filter buttons to actually filter data
- [ ] **Calendar navigation** (Events page) — previous/next month buttons are purely visual; make them functional
- [ ] **Province comparison dropdowns** (Survey stats) — currently show static Phnom Penh/Siem Reap; wire to real data
- [ ] **"Add Province" button** (Home page) — no onClick handler; implement province selection
- [ ] **Download/export buttons** on all statistics pages — implement PDF/CSV generation (e.g. `jspdf`, `papaparse`)
- [ ] **Resource download buttons** — "Download PDF", "Download Excel" on Resources page have no href/onClick

### Fix Broken Links

- [ ] Footer "Quick Links": Statistics Dashboard, Annual Performance Report, Open Data Catalog, Provincial Profiles — all point to `#`
- [ ] Home page: "All News", "Watch All Videos", "Read More" — all point to `#`
- [ ] Events page: "Access Archive", "Export Mission Data" — non-functional
- [ ] StatsSidebar: 5 disabled items (Kindergarten Readiness, Grade 1-3 Literacy, Grade 4-6 Numeracy, School Feeding Program, Primary Infrastructure) — link to `#`

### Missing Pages

- [ ] News detail page (`/news/[id]`)
- [ ] Event detail page (`/events/[id]`)
- [ ] Resource detail page (`/resources/[id]`)
- [ ] Custom 404 page (`app/not-found.tsx`)
- [ ] Custom error page (`app/error.tsx`)
- [ ] User profile/settings page (for authenticated users)
- [ ] Admin dashboard (user management, account unlock, content management)

### Additional Statistics Pages (referenced in StatsSidebar)

- [ ] Kindergarten Readiness (`/statistics/kindergarten`)
- [ ] Grade 1-3 Literacy (`/statistics/literacy`)
- [ ] Grade 4-6 Numeracy (`/statistics/numeracy`)
- [ ] School Feeding Program (`/statistics/feeding`)
- [ ] Primary Infrastructure (`/statistics/infrastructure`)

---

## P3 — Enhancements (Production Quality)

### Charts & Data Visualization

- [ ] Integrate a charting library (Recharts, Chart.js, or Plotly) — currently all charts are SVG/CSS placeholders
- [ ] Home page: enrollment growth chart (currently a visual placeholder with no data library)
- [ ] Survey page: challenges bar chart (currently CSS width bars)
- [ ] Census page: infrastructure donut charts (currently static SVGs)
- [ ] Teachers page: teacher vs students bar chart (currently CSS bars)
- [ ] Implement interactive Cambodia map with real geographic data (currently SVG placeholder with animated dots)

### Video Player

- [ ] Integrate a video player component (e.g. `react-player`) — home page and events page have play buttons that do nothing
- [ ] Host or link actual video content

### Mobile Responsiveness

- [ ] Add mobile hamburger menu — Header nav is `hidden lg:flex` with no mobile alternative
- [ ] Test and fix all pages at mobile breakpoints
- [ ] Ensure modals (LoginModal) work properly on mobile

### Testing

- [ ] Set up test framework (Vitest or Jest + React Testing Library)
- [ ] Unit tests for auth flows in `lib/auth.ts`
- [ ] Unit tests for database query functions
- [ ] Component tests for LoginModal, QRScanner
- [ ] Integration tests for API endpoints
- [ ] E2E tests for login flow and page navigation (Playwright or Cypress)

### Observability & Error Handling

- [ ] Add structured logging library (e.g. `pino`) — currently uses `console.log`
- [ ] Add error boundary components for graceful UI failures
- [ ] Add request ID tracking for correlating logs
- [ ] Implement comprehensive auth audit trail (failed attempts, lockouts, unlocks)

### Account Management

- [ ] Password reset / account recovery flow
- [ ] Password complexity validation on registration/change
- [ ] Admin mechanism to manually unlock locked accounts
- [ ] Optional 2FA for admin accounts

### DevOps & Config

- [ ] Add ESLint custom rules beyond the default `next/core-web-vitals`
- [ ] Add Prettier for consistent formatting
- [ ] Configure `next.config.mjs` image optimization settings (domains, formats)
- [ ] Add CI/CD pipeline configuration
- [ ] Add Docker setup for consistent development/deployment
- [ ] Add `.env.example` file documenting all required environment variables
