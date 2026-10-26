---
name: add-work-entry
description: Add or update a job / work experience entry on the portfolio (lib/work.ts and its scene animation). Use when the user mentions a new role, company, job, or case study.
---

# Add work entry

## Steps

1. **Add data** to the `work` array in `lib/work.ts` (newest first). Fill every required `WorkEntry` field:
   - `slug` (kebab-case, used in `/work/:slug`)
   - `company`, `role`, `period` (e.g. `"2025 — present"`)
   - `startDate` / `endDate` as `YYYY-MM-DD` (`endDate: null` if current)
   - `product`, `headline`, `summary`, `metrics[]`, `stack[]`
   - `sceneSubject`, `variant` (`"feature"` or `"compact"`)
2. **Scene animation (optional).**
   - Create `components/work/animations/<Name>Scene.tsx`, reusing `primitives.tsx`, `useSceneTimeline.ts` and `sceneMotion.ts`.
   - Register it by slug in `components/work/WorkAnimation.tsx`.
   - Without a scene, `ScenePlaceholder` is used.
3. **Verify.** Run `npm run build`, then check `/` and `/work/<slug>` in `npm run dev`.
