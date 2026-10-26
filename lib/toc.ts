export interface TocItem {
  id: string;
  text: string;
  depth: 1 | 2;
}

export function createSlugger(): (text: string) => string {
  const seen = new Map<string, number>();

  return (text: string): string => {
    const base =
      text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, "")
        .trim()
        .replace(/\s+/g, "-") || "section";

    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);

    return n === 0 ? base : `${base}-${n}`;
  };
}
