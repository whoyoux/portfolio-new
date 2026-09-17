# whxx.dev

Personal portfolio – a fully static Next.js site.

## Stack

- Next.js 16 (App Router, `output: "export"`), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui, `next-themes`
- MDX for project write-ups (`content/*.mdx`)

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build      # static site in ./out
pnpm preview    # serve ./out locally
```

Node version is pinned in `.nvmrc`.

## Content

- `constants/index.ts` – projects list (name, slug, hero image, tech stack), links, packages, birth date.
- `content/<slug>.mdx` – project page body. Images use plain markdown with a path relative to `assets/`:
  `![SnapCal dashboard](snapcal/dashboard.png)`. No imports needed.
- `assets/<slug>/` – project screenshots (hero + inline images).
- `mdx-components.tsx` – the single place that maps MDX elements (links, images) to React components.

Age on the home page is computed at build time from `BIRTH_DATE`.

## Deployment

`pnpm build` produces `out/`; deploy it as a static site (Dokploy → static, Cloudflare in front).
`robots.txt` and `sitemap.xml` are generated from `app/robots.ts` / `app/sitemap.ts`.
