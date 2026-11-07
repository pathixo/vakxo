# Vakxo
Official landing page for **Vakxo**, the world's first voice-native autonomous dev agent.
Built by [Pathixo](https://pathixo.com).

## What this is

A single-page Next.js marketing site with:

- Hero section with animated voice orb
- Feature highlights & comparison section
- Beta launch countdown
- Waitlist signup form

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion)
- Google Fonts (Ranchers, Space Mono, Plus Jakarta Sans)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Scripts

| Command       | Description                  |
| ------------- | ---------------------------- |
| `pnpm dev`    | Start dev server             |
| `pnpm build`  | Create production build      |
| `pnpm start`  | Serve the production build   |
| `pnpm lint`   | Run ESLint                   |
| `pnpm test`   | Run Vitest test suite        |

## Waitlist Setup

Waitlist signups are stored in **Supabase** and confirmation emails are sent via **Resend**.

1. Create a `.env.local` file (see `.env.example`).
2. Run the SQL schema in `supabase/schema.sql` inside your Supabase project's SQL Editor to create the `waitlist` table.

## Structure

```
app/
  layout.tsx    # Root layout (nav, sidebar, Cloudflare analytics)
  page.tsx      # Landing page (all sections)
  globals.css   # Tailwind theme & custom utilities
components/
  Countdown.tsx # Beta launch countdown
  EmailForm.tsx # Waitlist form
  Reveal.tsx    # Scroll-in animation wrapper
```

## Analytics

Web analytics via **Cloudflare Web Analytics** (beacon in `app/layout.tsx`).

## CI

GitHub Actions runs typecheck, lint, and build on every push/PR to `main`.
