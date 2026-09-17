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

- `constants/index.ts` – projects list (name, slug, tagline, hero image, tech stack, repo and
  optional live URL), links, packages, birth date. The tagline is shown on the home page, under
  the project title and as the page's meta description.
- `content/<slug>.mdx` – project page body: a short intro, `## Features`, optionally
  `## Screenshots`. Links to the repo/live site come from `constants`, not from MDX.
  Images use plain markdown with a path relative to `assets/`, one per line; the alt text
  becomes the caption: `![Dashboard with recent meals](snapcal/dashboard.webp)`.
- `assets/<slug>/` – project screenshots (hero + inline images). Heroes are shown at 16:9,
  inline images keep their own aspect ratio. Crop to the app's content – a full-desktop capture
  of a narrow app is unreadable at 768px.
- `mdx-components.tsx` – the single place that maps MDX elements (headings, links, images) to
  React components.

Age on the home page is computed at build time from `BIRTH_DATE`.

## Deployment

`pnpm build` produces `out/`; deploy it as a static site (Dokploy → static, Cloudflare in front).
`robots.txt` and `sitemap.xml` are generated from `app/robots.ts` / `app/sitemap.ts`.
