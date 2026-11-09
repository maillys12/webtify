# Webtify — Website Rental Platform

Phase 1 public marketing website built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- `/`: Thai landing page
- `/pricing`: five monthly plans across two categories
- `/templates`: category overview
- `/sitemap.xml`: generated when `NEXT_PUBLIC_SITE_URL` is configured
- `/robots.txt`: crawl rules

## Deployment

1. Import this GitHub repository into Vercel as a Next.js project.
2. Set `NEXT_PUBLIC_SITE_URL` to your real production origin, for example `https://example.com`, to enable canonical sitemap entries. Do not use a guessed Webtify domain.
3. Build with `npm run build`.

## Scope

Public UI only. No Supabase integration, customer auth, real orders, checkout, payment processing or site provisioning. Pricing is as agreed: premium-app Starter ฿99, Business ฿219, Pro ฿499; phone service Standard ฿179, Premium ฿259 monthly. Feature descriptions are provisional. Phone-number services must be authorized and compliant.

## Next steps

Confirm plan entitlements, implement authentication and rental requests using Supabase with Row Level Security, then integrate a verified payment provider in a later phase.
