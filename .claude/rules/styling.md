---
paths:
  - "components/**/*.tsx"
  - "src/**/*.{tsx,css}"
---

# Styling

## Tailwind v4

- Theme lives in `src/globals.css` under `@theme`. There is no `tailwind.config.*`.
- Use the **semantic color tokens**, never raw hex or default palette colors:
  - Surfaces: `bg-paper`, `bg-card`, `bg-chip`, `bg-hover`
  - Text: `text-ink`, `text-ink-soft`, `text-ink-muted`, `text-dim`
  - Borders: `border-line`, `border-line-soft`, `border-line-dash`
  - Accent: `text-accent`, `outline-accent`
  - Difficulty: `text-easy`, `text-medium`, `text-hard`
- Need a new color? Add a token to `@theme` **and** its dark value under `:root[data-theme="dark"]`.
- Layout widths: `max-w-content` (site) and `max-w-hub` (notes).

## Dark mode

- Theme is set by `data-theme` on `<html>` (`components/theme/useTheme.ts`).
- Use the custom `dark:` variant only when a token cannot cover it.

## Accessibility (required)

- Every interactive element gets a visible focus style:
  `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`
- Decorative icons: `aria-hidden`. Icon-only buttons/links: `sr-only` label.
- External links: `target="_blank" rel="noreferrer"` plus `<span className="sr-only"> (opens in a new tab)</span>`.
- Respect reduced motion for animations (see `components/work/animations/sceneMotion.ts`).
