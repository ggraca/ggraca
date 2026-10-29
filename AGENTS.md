# ggraca.com

Personal site and portfolio. One static page: intro, then a grid of project cards.
No backend, no routing.

## Stack

- Vite + React + TypeScript (strict)
- Tailwind CSS v4 + shadcn/ui (`src/components/ui` is our code — edit freely)
- lucide-react icons
- pnpm; Node version in `.node-version`
- Vitest (unit), Playwright (e2e + screenshots), Biome (lint + format)
- GitHub Pages (ggraca.com), deployed by GitHub Actions on push to `master`

Ask before adding any dependency. No extra CSS files (only `src/index.css`),
no CSS-in-JS, no other UI kits or icon sets, no router or state library.

## Commands

- `pnpm dev`: dev server at http://localhost:5173
- `pnpm check`: typecheck + lint + unit tests. Run after every change; must pass before you finish.
- `pnpm e2e`: Playwright against a production build. Run before finishing any UI change.
- `pnpm screenshots`: full-page PNGs in `screenshots/` at phone, tablet and desktop widths.
  Look at them after visual changes.
- `pnpm fix`: auto-fix lint and formatting
- `pnpm dlx shadcn@latest add <name>`: add a shadcn component

First run: `pnpm install && pnpm exec playwright install chromium`.

## Layout

- `src/content/projects.ts`: every portfolio entry and the `Project` type (newest first)
- `src/assets/projects/`: thumbnails (WebP). A project's `image` is the file name without `.webp`;
  `missing.webp` is the placeholder.
- `src/content/thumbnails.ts`: resolves thumbnail names to URLs
- `src/components/intro.tsx`: bio header
- `src/components/project-card.tsx`: one card
- `src/app.tsx`: page layout
- `e2e/`: Playwright tests (`screenshots.spec.ts` only writes PNGs)
- `public/`: favicon, profile picture (used as og:image, needs a stable URL)

## Conventions

- Content changes go in `src/content/`, not in components.
- Function components, named exports, kebab-case filenames.
- Style with Tailwind utilities; use `cn()` from `@/lib/utils` for conditional classes.
  Colors are theme variables in `src/index.css`; use semantic classes
  (`text-muted-foreground`, `text-primary`), never raw hex in components.
- External links use `<ExternalLink>` (sets target and rel).
- Images: WebP, at most 800px wide, ideally under 100 KB.
- Icon-only controls need an `aria-label`.
- Keep it simple: this is one page. No abstractions for things used once.

## Git

- Never commit to `master` directly. Merging to `master` deploys.
- Don't push unless asked.
