---
paths:
  - "src/**/*.{ts,tsx}"
  - "components/**/*.{ts,tsx}"
  - "lib/**/*.ts"
  - "plugins/**/*.ts"
---

# Code style

## TypeScript

- `strict` is on. No `any`; use a narrow type or `unknown`.
- Use `type` imports for types only: `import type { Problem } from "@/lib/content";`
- Import with the `@/` alias for cross-folder paths (`@/lib/...`, `@/components/...`). Relative imports only inside the same folder.
- Double quotes, semicolons, trailing commas in multi-line lists (match existing files).

## React

- Function components with **named exports** (`export function Hero()`). No default exports for components.
- Props typed inline: `({ children }: { children: React.ReactNode })`. Extract a `type` only when it is reused.
- One component per file; file name = component name (`WorkCard.tsx`).
- Hooks go in `useX.ts` files next to the feature (`components/theme/useTheme.ts`).
- No new state libraries. Use React state, router loaders, or plain data in `lib/`.

## Boundaries

- `lib/content.ts` uses `fs` and runs **only at build time** (Vite plugin). Never import it at runtime — type-only imports are fine.
- Browser code reads notes through `lib/hub.ts` (`import.meta.glob`) and `virtual:hub-posts`.
- Site copy and data (`site.ts`, `work.ts`, `skills.ts`) live in `lib/`, not hard-coded inside components.

## Comments

- The codebase has almost no comments. Write self-explanatory names instead; comment only the non-obvious *why*.
