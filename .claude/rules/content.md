---
paths:
  - "content/**/*.mdx"
---

# Hub notes (MDX)

## File location and naming

- Path: `content/<series>/<topic-folder>/<slug>.mdx`
- `series` must be one of: `dsa`, `system-design`, `ai-ml`, `postgresql` (see `Series` in `lib/content.ts`).
- Folder and file names: lowercase kebab-case, matching `^[a-z0-9-]+$`. Anything else is silently skipped.
- File name must equal the `slug` frontmatter.

## Frontmatter

```yaml
---
title: "Big-O Notation"
slug: "big-o-notation"
series: "dsa"
order: 2                 # position inside the topic folder
date: "2026-08-27"       # YYYY-MM-DD, quoted
updated: "2026-09-01"    # optional
draft: false             # true = visible only in `npm run dev`
summary: "One sentence, plain words."
tags: ["dsa", "fundamentals"]
problems:                # optional, DSA practice list
  - name: "66. Plus One"
    difficulty: "Easy"   # Easy | Medium | Hard
    idea: "Short hint of the link to this note"
    url: "https://leetcode.com/problems/plus-one/"
resources:               # optional
  - title: "..."
    kind: "Article"
    author: "..."
    url: "https://..."
---
```

## Section order (use the headings that apply, in this order)

1. `## Definition`
2. `## The problem it solves`
3. `## How it works` (use `###` for sub-steps)
4. `## Key terms`
5. `## The invariant`
6. `## Implementation`
7. `## Complexity`
8. `## Edge cases`
9. `## Trade-offs` / `## When to use / avoid`
10. `## In the wild`
11. `## Practice` — `<Problems />` then one `<Solution problem="...">` per entry
12. `## TL;DR` — last, 4–6 bullets

Only `##` and `###`. Never `#` (the page title comes from frontmatter).

## Components available in MDX

- `<Problems />` — renders the `problems` list.
- `<Solution problem="66. Plus One">…</Solution>` — `problem` must match a `problems[].name` exactly. Inside: **Approach.**, **Invariant.**, a `js` code block, complexity.
- `<Points><Point term="Term">…</Point></Points>` — definition lists (good for Key terms).
- ` ```mermaid ` fenced blocks — diagrams.
- ` ```js ` / ` ```ts ` etc. — highlighted by Shiki.

## Writing style

- Plain words, short sentences, one idea per paragraph.
- Build up step by step: concrete example or table first, then the name for it.
- Code examples in JavaScript.
