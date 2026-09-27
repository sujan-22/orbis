# Orbis Valves Industries

**A valve catalogue that reads like a spec sheet.** The website for an industrial valve manufacturer in India: a product catalogue with a specification table for every valve, a brochure download and inquiry forms.

**Live:** [orbisvalves.com](https://orbisvalves.com)

## What's in it

- **Product pages from typed data.** Gate, globe, ball, check and butterfly valves each get a page with materials of construction (ASTM grades) and specifications. Adding a valve means adding one entry in `src/lib/products.ts`.
- **Catalogue and brochure** pages for buyers who want the whole range at once.
- **Industries served,** an about page, and contact and inquiry forms that post to Formspree.
- **Static export.** The site builds to plain HTML so it runs on the client's shared hosting, with full SEO metadata on every page.

## Stack

Next.js 15 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Zod · Formspree

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to MilesWeb

1. Stop `npm run dev` if it's running (both write to `.next/`).
2. Run `npm run build`. This also exports the static site to `out/`.
   (`next export` no longer exists; `output: "export"` in `next.config.ts` handles it.)
3. Upload the **contents** of `out/` to `public_html`, replacing the old files.

Pages are exported as `about-us/index.html` and so on (`trailingSlash: true`), so clean
URLs and page refreshes work on LiteSpeed without any `.htaccess` rules.

## Where things live

- `src/lib/site.ts`: company name, phone, email, address, map links, form endpoint
- `src/lib/products.ts`: product list (name, category, tagline, image)
- `src/lib/product-material.ts`: spec tables shown on each product page
- `src/lib/industries.ts`: industries content
- `public/images/`: optimised WebP images; `public/brand/`: logo SVGs
- Forms post to Formspree (`SITE.formEndpoint`)

Built by [Sujan Rokad](https://sujanrokad.com).
