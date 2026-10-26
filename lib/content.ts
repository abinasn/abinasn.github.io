import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const CONTENT_DIR = path.join(process.cwd(), "content");

export type Series = "dsa" | "system-design" | "ai-ml" | "postgresql";

export interface Problem {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  idea: string;
  url: string;
}

export interface Resource {
  title: string;
  kind: string;
  author?: string;
  url: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  tags: string[];
  series: Series;
  summary: string;
  draft: boolean;
  order?: number;
  problems: Problem[];
  resources: Resource[];
  keywords: string;
  minutes: number;
}

const SEGMENT = /^[a-z0-9-]+$/;

export function bodyKeywords(body: string): string {
  const prose = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .toLowerCase();

  const words = new Set<string>();
  for (const word of prose.split(/\s+/)) {
    if (word.length > 1) words.add(word);
  }

  return [...words].sort().join(" ");
}

export function getSeriesFolders(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && SEGMENT.test(entry.name))
    .map((entry) => entry.name);
}

export function getAllSlugs(series: string): string[] {
  const seriesDir = path.join(CONTENT_DIR, series);
  if (!fs.existsSync(seriesDir)) return [];

  const walk = (dir: string, prefix: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      if (entry.isDirectory()) {
        return walk(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      }
      return entry.name.endsWith(".mdx")
        ? [`${prefix}${entry.name.replace(/\.mdx$/, "")}`]
        : [];
    });

  return walk(seriesDir, "");
}

export function getPostBySlug(series: string, slug: string): Post | null {
  const segments = slug.split("/");
  if (
    !SEGMENT.test(series) ||
    segments.length === 0 ||
    !segments.every((part) => SEGMENT.test(part))
  ) {
    return null;
  }

  const filePath = path.join(CONTENT_DIR, series, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    slug,
    title: data.title,
    date: data.date,
    updated: data.updated,
    tags: data.tags ?? [],
    series: data.series ?? series,
    summary: data.summary,
    draft: data.draft ?? false,
    order: data.order,
    problems: data.problems ?? [],
    resources: data.resources ?? [],
    keywords: bodyKeywords(content),
    minutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export function getAllPosts({
  includeDrafts,
}: {
  includeDrafts: boolean;
}): Post[] {
  return getSeriesFolders().flatMap((series) =>
    getAllSlugs(series)
      .map((slug) => getPostBySlug(series, slug))
      .filter(
        (post): post is Post => post !== null && (includeDrafts || !post.draft)
      )
      .map((post) => ({ ...post, series: series as Series }))
  );
}
