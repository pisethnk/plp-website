# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MoEYS Cambodia Primary Learning Portal (PLP) — a public-facing government education statistics website built with Next.js 14 App Router, React 18, and TypeScript 5.

## Commands

```bash
npm run dev      # Dev server (defaults to localhost:3000, .env.local sets port 3001)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Environment

Requires `.env.local` with: `DATABASE_URL`, `DATABASE_WRITE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`.

## Architecture

### Routing (App Router)

All routes live under `app/`. Public pages:
- `/home` — landing page (hero, news, statistics)
- `/resources` — learning resources library
- `/events` — missions and events calendar
- `/statistics/survey`, `/statistics/census`, `/statistics/teachers` — data visualization pages

Root `/` redirects to `/home` via middleware.

### Authentication

NextAuth.js 4 with JWT strategy (8-hour sessions) configured in `lib/auth.ts`. Four auth flows in priority order:
1. External API (`plp-api.moeys.gov.kh`)
2. Local PostgreSQL fallback
3. QR token via external API
4. QR token via local DB

Account lockout: 5 failed attempts triggers 15-minute lock. Route protection enforced in `middleware.ts` — statistics and content pages are public; admin routes require auth.

User roles: `super_admin`, `province_admin`, `school_staff`, `viewer`.

### Database

Raw SQL via `pg` (no ORM). Separate read/write connection pools in `lib/db/postgres.ts` with max 10 connections each.

### Component Layout

`app/layout.tsx` wraps all pages with: `AuthProvider` > `GovBar` > `Header` > `{children}` > `Footer` > `ScrollToTop`.

Shared UI components live in `components/moeys/`. Auth components in `components/auth/` and `components/login/`.

### Key Conventions

- **Server Components by default**; client components use `'use client'` directive
- **Tailwind CSS** utility-first styling with custom theme colors: `gov-blue` (#002366), `gov-gold` (#D4AF37), plus vibrant/elementary palettes defined in `tailwind.config.ts`
- **Path alias**: `@/*` maps to project root
- **Fonts**: Noto Sans Khmer + Public Sans + Inter loaded via `next/font`
- **Icons**: Google Material Icons and Material Symbols via CDN
- **i18n**: Khmer/English language toggle in GovBar; no i18n library — text is hardcoded with Unicode escapes for Khmer
- **No global state library** — component-level React hooks + NextAuth session context only
- **Dynamic imports** with `ssr: false` for browser-only components (e.g., QR scanner)
- **Data**: Pages currently use inline mock data arrays; no API integration for statistics content yet
