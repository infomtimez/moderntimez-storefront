# ModernTimez Storefront — Project Context

## Stack

- **Next.js 16.2.6** App Router, TypeScript, Tailwind CSS v4, pnpm 11.1.2
- **Shopify Storefront API** via `@shopify/hydrogen-react` — GraphQL, 2025-04 API version
- **Vercel** deployment — CLI only (no GitHub integration)

## Vercel

- Account: `infomtimez-9360` (Google OAuth signup — no GitHub linked)
- Project: `infomtimez-9360s-projects/moderntimez-storefront`
- Deploy command: `vercel deploy --prod --yes` from project root
- Install command: `pnpm install --ignore-scripts && pnpm rebuild sharp unrs-resolver`
  (Vercel uses pnpm 10; `--ignore-scripts` bypasses the ERR_PNPM_IGNORED_BUILDS error)
- `pnpm-workspace.yaml` was deleted — do not recreate it
- Custom domain: `moderntimez.com` → Vercel IP `76.76.21.21`

## Shopify

- Store domain: `moderntimez-gift.myshopify.com`
- Primary domain configured in Shopify: `moderntimez.com`
- Storefront API token: in `.env.local` as `NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN`
- Current Shopify data: only 1 collection (`frontpage`) with 1 product ("Engraved Brass Compass")
- All other collection handles in the code (`corporate-awards`, `realtor-closing-gifts`, etc.) do not exist in Shopify yet — user needs to create them in Shopify admin

## Known Issues / Decisions

- **Checkout URL conflict**: Shopify's primary domain is `moderntimez.com`, so `cartCreate` returns checkoutUrls like `https://moderntimez.com/cart/c/...`. Fixed via rewrites in `next.config.ts` that proxy `/cart/c/*` and `/checkouts/*` to `moderntimez-gift.myshopify.com`.
- **Logo**: `public/images/logo.png` (lowercase — Linux/Vercel is case-sensitive; file must be `logo.png` not `Logo.png`)
- **Hero images**: `public/images/Hero_image1.png`, `Hero_image2.png`, `Hero_image3.png` (carousel)

## Environment Variables (`.env.local`)

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=moderntimez-gift.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN=378ea3ff337fa8f63da65bcea310175e
SHOPIFY_STOREFRONT_API_VERSION=2025-04
SHOPIFY_REVALIDATION_SECRET=generate-a-long-random-string   ← still a placeholder, should be changed
NEXT_PUBLIC_SITE_URL=https://moderntimez.com
```

## Pending Work

- User needs to add collections and products in Shopify admin for them to appear on site
- Replace `SHOPIFY_REVALIDATION_SECRET` with a real random string
- Create `/public/og-image.jpg` (OG image referenced in metadata but missing)
- Pages that exist as links but have no route yet: `/faq`, `/policies/*`, `/about`, `/stories`, `/personalization`, `/bulk`, `/request-quote`, `/contact`
