# Orbis Valves Industries — website

Next.js (App Router) site exported as static HTML for MilesWeb hosting.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to MilesWeb

1. Stop `npm run dev` if it's running (both write to `.next/`).
2. `npm run build` — this also exports the static site to `out/`.
   (`next export` no longer exists; `output: "export"` in `next.config.ts` handles it.)
3. Upload the **contents** of `out/` to `public_html`, replacing the old files.

Pages are exported as `about-us/index.html` etc. (`trailingSlash: true`) so clean
URLs and page refreshes work on LiteSpeed without any `.htaccess` rules.

## Where things live

- `src/lib/site.ts` — company name, phone, email, address, map links, form endpoint
- `src/lib/products.ts` — product list (name, category, tagline, image)
- `src/lib/product-material.ts` — spec tables shown on each product page
- `src/lib/industries.ts` — industries content
- `public/images/` — optimised WebP images; `public/brand/` — logo SVGs
- Forms post to Formspree (`SITE.formEndpoint`)
