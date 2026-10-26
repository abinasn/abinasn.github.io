---
name: verify-build
description: Check the site still compiles and builds before committing. Use after code or content changes, or when the user asks to verify, check, or test the build.
---

# Verify build

## Steps

1. Install deps if missing: `[ -d node_modules ] || npm ci`
2. Typecheck: `npm run typecheck`
3. Build: `npm run build`
4. Confirm `dist/index.html` and `dist/404.html` both exist.

## On failure

- **TS error** → fix the type; do not use `any` or `@ts-ignore`.
- **MDX error** → usually a bad frontmatter field, an unclosed JSX tag (`<Solution>`), or a stray `{` / `<` in prose (escape it or use backticks).
- **Missing note** → check the path matches `^[a-z0-9-]+$` and `draft` is `false`.

Report the exact error output if you cannot fix it.
