# Workflow

## Git

- Work on `develop`. `main` deploys to production — never push to it unless asked.
- Small, focused commits with a clear message (e.g. `hub: add sliding window note`, `work: fix card focus ring`).
- Do not commit `dist/` or `node_modules/`.

## Before saying "done"

1. `npm run typecheck` passes.
2. For UI, routing, MDX or Vite-config changes: `npm run build` passes.
3. For visual changes: check both light and dark theme, and mobile width.

## Dependencies

- Do not add packages unless clearly needed. Prefer what is already installed.
- Use `npm` (there is a `package-lock.json`). CI runs `npm ci` on Node 22.
