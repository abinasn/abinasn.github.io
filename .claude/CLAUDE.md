# abinasn.github.io

Portfolio + learning hub. Vite, React 19, TypeScript, Tailwind v4, MDX.

## Commands

- `npm run dev` — dev server (drafts visible)
- `npm run build` — typecheck + build. Run before committing.

## Layout

- `src/` — pages and router
- `components/` — UI, grouped by feature
- `lib/` — site data and helpers
- `content/<series>/<topic>/<slug>.mdx` — hub notes

## Code

- Named exports. One component per file.
- Use the `@/` import alias. No `any`.
- Colors from tokens in `src/globals.css` (`text-ink`, `bg-paper`, `text-accent`). No raw hex.
- `lib/content.ts` uses `fs` — build time only.

## Notes (MDX)

- Series: `dsa`, `system-design`, `ai-ml`, `postgresql`. Names in kebab-case.
- Frontmatter: `title`, `slug`, `series`, `order`, `date`, `draft`, `summary`, `tags`.
- `##` / `###` headings only. Start with `## Definition`, end with `## TL;DR`.
- `<Solution problem="...">` must match a `problems[].name`.

## Git

- Work on `develop`. `main` deploys to GitHub Pages.
