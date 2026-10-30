# ggraca.com

Personal site and portfolio. One static page with two views, picked by the URL hash: **Work** (default, `#work`):
intro, experience, selected projects, education; **Showcase** (`#showcase`): intro and
every project, with filters. No backend, no router library.

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

- `src/content/profile.ts`: name, links, intro, showcase lead, view labels, jobs and education
- `src/content/projects.ts`: every portfolio project and the `Project` type (newest first;
  jobs go in `profile.ts`). `featured` (1, 2, 3…) puts a project in the work view, in that order; `kind` drives the filters.
- `src/assets/projects/`: thumbnails (WebP). A project's `image` is the file name without `.webp`;
  `missing.webp` is the placeholder.
- `src/content/thumbnails.ts`: resolves thumbnail names to URLs
- `src/components/intro.tsx`: bio header
- `src/components/view-switch.tsx`: Work/Showcase tabs and the `useView` hash hook
- `src/components/work-view.tsx`, `showcase-view.tsx`: the two views
- `src/components/project-card.tsx`: one card (collaborators collapsed under "Team of N")
- `src/components/external-link.tsx`, `tag-list.tsx`: shared link and tag lists
- `src/app.tsx`: page layout
- `src/entry-server.tsx`, `scripts/prerender.js`: `pnpm build` renders the default (work) view to
  HTML inside `dist/index.html`, and `src/main.tsx` hydrates it. Code that renders must not touch
  `window` or produce different output on the server (e.g. no `new Date()` in markup).
- `e2e/`: Playwright tests (`screenshots.spec.ts` only writes PNGs)
- `public/`: favicon, profile picture (used as og:image, needs a stable URL)

## Conventions

- Content changes go in `src/content/`, not in components.
- Function components, named exports, kebab-case filenames.
- Style with Tailwind utilities; use `cn()` from `@/lib/utils` for conditional classes.
  Colors are theme variables in `src/index.css`; use semantic classes
  (`text-muted-foreground`, `text-primary`), never raw hex in components.
- External links use `<ExternalLink>` (sets target and rel).
- Project cards: the description is one sentence of about 100–140 characters. Start with what it
  is ("A local multiplayer fighting game…"), then your part or the hook. Don't repeat what the card
  already shows (date, event, team, award). Tags and links must each fit on one line of a desktop
  card; drop event pages (Ludum Dare, Global Game Jam) and tags the description already covers first.
- Images: WebP, at most 800px wide, ideally under 100 KB.
- Icon-only controls need an `aria-label`.
- Keep it simple: this is one page. No abstractions for things used once.

## Git

- Never commit to `master` directly. Merging to `master` deploys.
- Don't push unless asked.
