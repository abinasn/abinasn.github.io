import { Fragment } from "react";
import { Link } from "react-router";
import { Pill } from "@/components/ui/Pill";

export function NoteHeader({
  trackName,
  trackHref,
  groups = [],
  title,
  summary,
  tags,
  minutes,
  draft = false,
}: {
  trackName: string;
  trackHref: string;
  groups?: { name: string; url: string }[];
  title: string;
  summary: string;
  tags: string[];
  minutes?: number;
  draft?: boolean;
}) {
  return (
    <header>
      {draft && (
        <p className="border-medium/40 text-medium mb-4 rounded-md border border-dashed px-3 py-2 font-mono text-[11.5px]">
          Draft — visible in development only, never published.
        </p>
      )}

      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="text-dim flex flex-wrap items-center gap-2.5 font-mono text-[11.5px]">
          <li>
            <Link to={trackHref} className="text-accent hover:underline">
              {trackName}
            </Link>
          </li>
          {groups.map((group) => (
            <Fragment key={group.url}>
              <li aria-hidden>/</li>
              <li>
                <Link to={group.url} className="text-accent hover:underline">
                  {group.name}
                </Link>
              </li>
            </Fragment>
          ))}
          <li aria-hidden>/</li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>

      <h1 className="text-[30px] leading-[1.1] font-extrabold tracking-[-1px] text-balance md:text-[36px] md:tracking-[-1.4px] lg:text-[42px] lg:tracking-[-1.8px]">
        {title}
      </h1>

      {summary && (
        <p className="text-ink-soft mt-4 text-[16px] leading-[1.6] text-pretty md:text-[17px] lg:text-[18px]">
          {summary}
        </p>
      )}

      <div className="border-line mt-5.5 mb-9.5 flex flex-wrap items-center gap-1.75 border-b pb-8">
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}

        {minutes && (
          <span className="text-dim ml-auto font-mono text-[11px]">
            {minutes} min read
          </span>
        )}
      </div>
    </header>
  );
}
