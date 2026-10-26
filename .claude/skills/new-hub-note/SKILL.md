---
name: new-hub-note
description: Create a new MDX note in the learning hub (content/<series>/...). Use when the user asks to add, write, or draft a hub note, DSA topic, system design note, AI/ML note, or PostgreSQL note.
---

# New hub note

Follow `.claude/rules/content.md` for the full format.

## Steps

1. **Pick the location.**
   - Series: `dsa`, `system-design`, `ai-ml`, or `postgresql`.
   - List the series folder (`ls content/<series>`) and reuse an existing topic folder if it fits.
2. **Pick `slug` and `order`.**
   - Slug: lowercase kebab-case, same as the file name.
   - Order: next number after the highest `order:` in that topic folder.
3. **Create the file** `content/<series>/<topic>/<slug>.mdx` with frontmatter:
   - `draft: true` unless the user says to publish.
   - `date`: today, `YYYY-MM-DD`.
4. **Write the body** using the section order from the rules. Skip sections that do not apply.
5. **Practice section (DSA).** Add `problems` to frontmatter, then `<Problems />` and one `<Solution problem="...">` per entry. Names must match exactly.
6. **Verify.** Run `npm run build` (use `draft: false` temporarily if you need to see it in the build, or check with `npm run dev`).

## Checklist

- [ ] File name == `slug`
- [ ] No `#` heading in the body
- [ ] Every `<Solution problem>` matches a `problems[].name`
- [ ] Ends with `## TL;DR`
