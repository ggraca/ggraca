# ggraca.com

My personal website and portfolio.

Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui. Deployed to GitHub Pages on every push to `master`.

```sh
pnpm install
pnpm exec playwright install chromium   # once, for e2e tests
pnpm dev                                # http://localhost:5173
pnpm check                              # types, lint, unit tests
pnpm e2e                                # browser tests
```

To add a project, edit `src/content/projects.ts` and put its thumbnail in `src/assets/projects/`.
See [AGENTS.md](AGENTS.md) for conventions.

Deploys use GitHub Actions, so the repo's Settings → Pages → Source must be set to "GitHub Actions", with `ggraca.com` as the custom domain.
