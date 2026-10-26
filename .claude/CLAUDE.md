# abinasn.github.io

Personal portfolio + learning hub for Abinas Patra. Deployed to GitHub Pages.

## Stack

- Vite 7 + React 19 + TypeScript (strict)
- React Router 7 (`createBrowserRouter`, see `src/router.tsx`)
- Tailwind CSS v4 (theme tokens in `src/globals.css`, no `tailwind.config`)
- MDX notes in `content/`, compiled by `@mdx-js/rollup` with Shiki + Mermaid
- Icons: `lucide-react`

## Commands

| Task | Command |
| --- | --- |
| Dev server (drafts visible) | `npm run dev` |
| Typecheck | `npm run typecheck` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

There is no test runner and no linter. `npm run build` is the check: it runs `tsc --noEmit`, `vite build`, and copies `index.html` to `404.html` for SPA routing on GitHub Pages.

## Layout

| Path | What lives there |
| --- | --- |
| `src/pages/` | Route components (`Home`, `Hub*`, `WorkCaseStudy`, `NotFound`) |
| `src/router.tsx` | All routes |
| `components/<area>/` | UI grouped by feature: `ui`, `hero`, `hub`, `layout`, `work`, `contact`, `skill`, `theme` |
| `lib/` | Data + helpers: `site.ts`, `work.ts`, `skills.ts`, `content.ts` (Node-only), `hub.ts` (browser), rehype plugins |
| `plugins/hubContent.ts` | Vite plugin exposing `virtual:hub-posts` (post metadata) |
| `content/<series>/**.mdx` | Hub notes. Series = `dsa`, `system-design`, `ai-ml`, `postgresql` |
| `public/` | Static files (photo, resume PDF, favicon) |

## Deploy

- `.github/workflows/deploy.yml` builds and publishes `dist/` on push to `main`.
- Day-to-day work happens on `develop`. Never push to `main` without being asked.

## Rules

Detailed rules live in `.claude/rules/`:

- `code-style.md` — TypeScript / React conventions
- `styling.md` — Tailwind tokens, dark mode, a11y
- `content.md` — MDX note format and frontmatter
- `workflow.md` — git and verification steps

Skills live in `.claude/skills/` (`new-hub-note`, `add-work-entry`, `verify-build`).
