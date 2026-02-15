# NLT SPORTS DRIVE — Next.js (App Router) Landing + Onboarding

App Router structure:
- `app/layout.tsx` (root layout)
- `app/page.tsx` (landing)
- `app/onboarding/page.tsx`
- `app/portal/page.tsx`
- `app/legal/terms/page.tsx`
- `app/legal/privacy/page.tsx`
- `app/api/docusign/createEnvelope/route.ts` (DocuSign stub)

## Quick start
```bash
npm install
npm run dev
```

## Cloudflare Pages
See `CLOUDFLARE_PAGES_SETUP.md`.

## Env vars
Copy `.env.local.sample` to `.env.local` and fill in values when you wire DocuSign/Gumroad.
