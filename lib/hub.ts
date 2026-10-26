import type { ComponentType } from "react";
import type { MDXProps } from "mdx/types";
import posts from "virtual:hub-posts";
import type { Post, Series } from "./content";
import type { NoteOutline } from "./rehypeNoteOutline";

export const tracks = [
  {
    id: "system-design",
    name: "System Design",
    blurb: "How systems fall over, and the levers that keep them standing.",
  },
  {
    id: "dsa",
    name: "DSA Foundations",
    blurb: "The patterns worth recalling instantly, with problems to prove it.",
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    blurb: "Working notes on shipping with models rather than training them.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    blurb: "The principles and trade-offs of storing and retrieving data.",
  }
] as const satisfies readonly { id: Series; name: string; blurb: string }[];

export type Track = (typeof tracks)[number];

const GROUP_LABELS: Record<string, string> = {
  "api-design": "API Design",
  "ai-ml": "AI / ML",
  hld: "HLD",
  lld: "LLD",
  sql: "SQL",
};

export function groupLabel(segment: string): string {
  return (
    GROUP_LABELS[segment] ??
    segment
      .split("-")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export interface HubNote {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  href: string;
  series: Series;
  trackName: string;
  groupPath: string[];
  groupLabels: string[];
  order?: number;
  problemCount: number;
  search: string;
}

export interface HubGroup {
  path: string;
  label: string;
  href: string;
  entries: HubEntry[];
  noteCount: number;
}

export type HubEntry =
  | { kind: "note"; note: HubNote }
  | { kind: "group"; group: HubGroup };

export interface HubTrack {
  id: Series;
  name: string;
  blurb: string;
  index: string;
  entries: HubEntry[];
  notes: HubNote[];
}

export function noteHref(series: Series, slug: string): string {
  return `/hub/${series}/${slug}`;
}

export function noteImagePath(series: Series, slug: string): string {
  return `/og/hub/${series}/${slug}`;
}

export function findTrack(id: string): Track | undefined {
  return tracks.find((track) => track.id === id);
}

let hubTree: HubTrack[] | undefined;

function publishedPosts(series: Series): Post[] {
  return posts
    .filter((post) => post.series === series && !post.draft)
    .sort((a, b) => {
      const byOrder = (a.order ?? Infinity) - (b.order ?? Infinity);
      if (byOrder !== 0) return byOrder;
      return a.date < b.date ? 1 : -1;
    });
}

export function getHubTree(): HubTrack[] {
  hubTree ??= tracks.map((track, i) => {
    const notes = publishedPosts(track.id).map((post) => toHubNote(post, track));
    const entries = buildEntries(notes, track, 0, "");

    return {
      id: track.id,
      name: track.name,
      blurb: track.blurb,
      index: String(i + 1).padStart(2, "0"),
      entries,
      notes: flattenEntries(entries),
    };
  });

  return hubTree;
}

function toHubNote(post: Post, track: Track): HubNote {
  const segments = post.slug.split("/");
  const groupPath = segments.slice(0, -1);

  return {
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    date: post.date,
    tags: post.tags,
    href: noteHref(track.id, post.slug),
    series: track.id,
    trackName: track.name,
    groupPath,
    groupLabels: groupPath.map(groupLabel),
    order: post.order,
    problemCount: post.problems.length,
    search: [
      post.title,
      post.summary,
      post.tags.join(" "),
      post.problems.map((p) => `${p.name} ${p.idea}`).join(" "),
      post.keywords,
    ]
      .join(" ")
      .toLowerCase(),
  };
}

function buildEntries(
  notes: HubNote[],
  track: Track,
  depth: number,
  prefix: string
): HubEntry[] {
  const here: HubEntry[] = [];
  const folders = new Map<string, HubNote[]>();

  for (const note of notes) {
    if (note.groupPath.length === depth) {
      here.push({ kind: "note", note });
      continue;
    }

    const segment = note.groupPath[depth];
    const bucket = folders.get(segment);
    if (bucket) bucket.push(note);
    else folders.set(segment, [note]);
  }

  for (const [segment, inside] of folders) {
    const path = `${prefix}${segment}`;

    here.push({
      kind: "group",
      group: {
        path,
        label: groupLabel(segment),
        href: `/hub/${track.id}/${path}`,
        entries: buildEntries(inside, track, depth + 1, `${path}/`),
        noteCount: inside.length,
      },
    });
  }

  return here.sort(compareEntries);
}

function compareEntries(a: HubEntry, b: HubEntry): number {
  const byOrder = entryOrder(a) - entryOrder(b);
  if (byOrder !== 0) return byOrder;
  return entryDate(a) < entryDate(b) ? 1 : -1;
}

function entryOrder(entry: HubEntry): number {
  if (entry.kind === "note") return entry.note.order ?? Infinity;
  return Math.min(
    ...entry.group.entries.map(entryOrder).concat(Infinity)
  );
}

function entryDate(entry: HubEntry): string {
  if (entry.kind === "note") return entry.note.date ?? "";
  return entry.group.entries.map(entryDate).sort().at(-1) ?? "";
}

function flattenEntries(entries: HubEntry[]): HubNote[] {
  return entries.flatMap((entry) =>
    entry.kind === "note" ? [entry.note] : flattenEntries(entry.group.entries)
  );
}

export function flattenGroups(tree: HubTrack[]): {
  series: Series;
  group: HubGroup;
}[] {
  const walk = (
    series: Series,
    entries: HubEntry[]
  ): { series: Series; group: HubGroup }[] =>
    entries.flatMap((entry) =>
      entry.kind === "group"
        ? [{ series, group: entry.group }, ...walk(series, entry.group.entries)]
        : []
    );

  return tree.flatMap((track) => walk(track.id, track.entries));
}

export function findGroup(
  tree: HubTrack[],
  series: string,
  path: string
): HubGroup | undefined {
  return flattenGroups(tree).find(
    (entry) => entry.series === series && entry.group.path === path
  )?.group;
}

export interface NoteModule {
  default: ComponentType<MDXProps>;
  outline: NoteOutline;
}

const noteModules = import.meta.glob<NoteModule>("/content/**/*.mdx");

export function getHubNote(series: string, slug: string[]): Post | null {
  const track = findTrack(series);
  const valid =
    slug.length > 0 && slug.every((segment) => /^[a-z0-9-]+$/.test(segment));
  if (!track || !valid) return null;

  const joined = slug.join("/");
  const post = posts.find(
    (entry) => entry.series === track.id && entry.slug === joined
  );

  const showDrafts = import.meta.env.DEV;

  return post && (!post.draft || showDrafts) ? post : null;
}

export function loadNoteBody(post: Post): Promise<NoteModule> | null {
  const load = noteModules[`/content/${post.series}/${post.slug}.mdx`];
  return load ? load() : null;
}

export function getHubCounts(tree: HubTrack[]): {
  notes: number;
  problems: number;
} {
  return tree.reduce(
    (acc, track) => ({
      notes: acc.notes + track.notes.length,
      problems:
        acc.problems +
        track.notes.reduce((sum, note) => sum + note.problemCount, 0),
    }),
    { notes: 0, problems: 0 }
  );
}

export function flattenNotes(tree: HubTrack[]): HubNote[] {
  return tree.flatMap((track) => track.notes);
}

export function findNeighbours(
  tree: HubTrack[],
  series: string,
  slug: string
): { prev: HubNote | null; next: HubNote | null } {
  const flat = flattenNotes(tree);
  const at = flat.findIndex(
    (note) => note.series === series && note.slug === slug
  );

  if (at === -1 || flat.length < 2) return { prev: null, next: null };

  return {
    prev: flat[(at - 1 + flat.length) % flat.length],
    next: flat[(at + 1) % flat.length],
  };
}

export function lastUpdated(tree: HubTrack[]): string | null {
  const dates = flattenNotes(tree)
    .map((note) => note.date)
    .filter(Boolean)
    .sort();

  const newest = dates.at(-1);
  if (!newest) return null;

  return new Date(newest).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
