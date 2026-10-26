import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import type { HubEntry } from "@/lib/hub";

export function EntryList({
  entries,
  depth = 0,
}: {
  entries: HubEntry[];
  depth?: number;
}) {
  if (entries.length === 0) {
    return (
      <p className="text-dim px-1.5 py-6 text-[13.5px]">
        Nothing published here yet.
      </p>
    );
  }

  return (
    <ul
      className={
        depth === 0
          ? "border-line list-none border-t"
          : "border-line-soft mt-1 ml-1.5 list-none border-l pl-3.5"
      }
    >
      {entries.map((entry) =>
        entry.kind === "note" ? (
          <li key={entry.note.href}>
            <Link
              to={entry.note.href}
              className="border-line-soft hover:bg-card focus-visible:outline-accent group block rounded-md border-b px-1.5 py-4.5 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
            >
              <span className="group-hover:text-accent block text-[16px] font-semibold transition-colors">
                {entry.note.title}
              </span>
              <span className="text-ink-muted mt-1 block text-[13.5px] leading-[1.55]">
                {entry.note.summary}
              </span>
              {entry.note.problemCount > 0 && (
                <span className="text-dim mt-1.5 block font-mono text-[11px]">
                  {entry.note.problemCount} problems
                </span>
              )}
            </Link>
          </li>
        ) : (
          <li key={entry.group.href} className="border-line-soft border-b py-4">
            <Link
              to={entry.group.href}
              className="hover:text-accent focus-visible:outline-accent group flex items-center gap-2 px-1.5 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
            >
              <span className="text-[14px] font-bold tracking-[-0.3px]">
                {entry.group.label}
              </span>
              <span className="text-dim font-mono text-[11px]">
                {entry.group.noteCount}
              </span>
              <ChevronRight
                size={13}
                aria-hidden
                className="text-placeholder transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <EntryList entries={entry.group.entries} depth={depth + 1} />
          </li>
        )
      )}
    </ul>
  );
}
