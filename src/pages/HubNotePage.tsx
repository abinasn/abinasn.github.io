import { Fragment } from "react";
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { EntryList } from "@/components/hub/EntryList";
import { HubToc } from "@/components/hub/HubToc";
import { hubMdxComponents } from "@/components/hub/mdxComponents";
import { NoteHeader } from "@/components/hub/NoteHeader";
import { PrevNext } from "@/components/hub/PrevNext";
import { ProblemsTable } from "@/components/hub/ProblemsTable";
import { ResourceList } from "@/components/hub/ResourceList";
import { Solution } from "@/components/hub/Solution";
import type { Post, Series } from "@/lib/content";
import {
  findGroup,
  findNeighbours,
  findTrack,
  getHubNote,
  getHubTree,
  groupLabel,
  loadNoteBody,
  noteHref,
  type HubGroup,
  type NoteModule,
  type Track,
} from "@/lib/hub";
import { createSlugger, type TocItem } from "@/lib/toc";
import { NotFound } from "./NotFound";

type HubNoteData =
  | { kind: "note"; track: Track; note: Post; body: NoteModule }
  | { kind: "group"; track: Track; group: HubGroup }
  | null;

export async function hubNoteLoader({
  params,
}: LoaderFunctionArgs): Promise<HubNoteData> {
  const series = params.series ?? "";
  const slug = (params["*"] ?? "").split("/").filter(Boolean);

  const track = findTrack(series);
  if (!track) return null;

  const note = getHubNote(series, slug);
  if (note) {
    const body = await loadNoteBody(note);
    return body ? { kind: "note", track, note, body } : null;
  }

  const group = findGroup(getHubTree(), series, slug.join("/"));
  return group ? { kind: "group", track, group } : null;
}

export function HubNotePage() {
  const data = useLoaderData<HubNoteData>();

  if (!data) return <NotFound />;

  if (data.kind === "group") {
    return <FolderIndex track={data.track} group={data.group} />;
  }

  return (
    <NoteArticle
      key={data.note.slug}
      track={data.track}
      note={data.note}
      body={data.body}
    />
  );
}

function NoteArticle({
  track,
  note,
  body,
}: {
  track: Track;
  note: Post;
  body: NoteModule;
}) {
  const { default: Content, outline } = body;
  const { prev, next } = findNeighbours(getHubTree(), track.id, note.slug);
  const crumbs = groupCrumbs(track.id, note.slug);

  const nextSlug = createSlugger();
  for (const item of outline.toc) nextSlug(item.text);

  const sections: TocItem[] = [...outline.toc];

  const problemsId =
    note.problems.length > 0 && !outline.placedProblems
      ? nextSlug("Problems")
      : undefined;
  if (problemsId) sections.push({ id: problemsId, text: "Problems", depth: 2 });

  const resourcesId =
    note.resources.length > 0 ? nextSlug("Where this came from") : undefined;
  if (resourcesId)
    sections.push({ id: resourcesId, text: "Where this came from", depth: 2 });

  const hasToc = sections.length > 1;

  return (
    <div
      className={`w-full px-5 md:px-8 lg:px-11.5 ${
        hasToc
          ? "xl:grid xl:grid-cols-[minmax(0,1fr)_var(--hub-toc-w)] xl:items-start xl:gap-x-10"
          : ""
      }`}
    >
      <article className="mx-auto w-full max-w-hub pt-7 pb-18 md:pt-10 md:pb-24 lg:pt-11 lg:pb-28">
        <NoteHeader
          trackName={track.name}
          trackHref={`/hub/${track.id}`}
          groups={crumbs}
          title={note.title}
          summary={note.summary}
          tags={note.tags}
          minutes={note.minutes}
          draft={note.draft}
        />

        <Content
          components={{
            ...hubMdxComponents,
            Problems: () => (
              <ProblemsTable problems={note.problems} heading={false} />
            ),
            Solution: ({
              problem,
              children,
            }: {
              problem: string;
              children: React.ReactNode;
            }) => (
              <Solution problem={problem} problems={note.problems}>
                {children}
              </Solution>
            ),
          }}
        />

        {problemsId && (
          <ProblemsTable problems={note.problems} id={problemsId} />
        )}
        {note.resources.length > 0 && (
          <ResourceList resources={note.resources} id={resourcesId} />
        )}

        <PrevNext prev={prev} next={next} />
      </article>

      {hasToc && <HubToc items={sections} />}
    </div>
  );
}

function groupCrumbs(
  series: Series,
  slug: string
): { name: string; url: string }[] {
  let path = "";

  return slug
    .split("/")
    .slice(0, -1)
    .map((segment) => {
      path = path ? `${path}/${segment}` : segment;
      return { name: groupLabel(segment), url: noteHref(series, path) };
    });
}

function FolderIndex({ track, group }: { track: Track; group: HubGroup }) {
  const crumbs = [
    ...groupCrumbs(track.id, group.path),
    { name: group.label, url: group.href },
  ];

  return (
    <div className="w-full px-5 md:px-8 lg:px-11.5">
      <div className="max-w-hub mx-auto w-full pt-7 pb-18 md:pt-10 md:pb-24 lg:pt-11 lg:pb-28">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="text-dim flex flex-wrap items-center gap-2.5 font-mono text-[11.5px]">
            <li>
              <Link to="/hub" className="text-accent hover:underline">
                learning hub
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                to={`/hub/${track.id}`}
                className="text-accent hover:underline"
              >
                {track.name}
              </Link>
            </li>
            {crumbs.slice(0, -1).map((crumb) => (
              <Fragment key={crumb.url}>
                <li aria-hidden>/</li>
                <li>
                  <Link to={crumb.url} className="text-accent hover:underline">
                    {crumb.name}
                  </Link>
                </li>
              </Fragment>
            ))}
            <li aria-hidden>/</li>
            <li aria-current="page">{group.label}</li>
          </ol>
        </nav>

        <h1 className="text-[30px] leading-[1.1] font-extrabold tracking-[-1px] md:text-[36px] md:tracking-[-1.4px] lg:text-[42px] lg:tracking-[-1.8px]">
          {group.label}
        </h1>

        <p className="text-dim border-line mt-5.5 border-b pb-8 font-mono text-[11.5px]">
          {group.noteCount} {group.noteCount === 1 ? "note" : "notes"} ·{" "}
          {track.name}
        </p>

        <div className="mt-9">
          <EntryList entries={group.entries} />
        </div>
      </div>
    </div>
  );
}
