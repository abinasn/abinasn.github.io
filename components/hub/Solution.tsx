import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { Problem } from "@/lib/content";
import { difficultyTone } from "./difficulty";

export function Solution({
  problem,
  problems,
  children,
}: {
  problem: string;
  problems: Problem[];
  children: React.ReactNode;
}) {
  const position = problems.findIndex((entry) => entry.name === problem);
  const entry = position === -1 ? undefined : problems[position];

  return (
    <details className="border-line-soft group/solution border-t">
      <summary className="hover:bg-hover dark:hover:bg-chip focus-visible:outline-accent flex cursor-pointer list-none items-start gap-2.5 rounded-md px-1.5 py-3.25 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          size={13}
          aria-hidden
          className="text-dim group-open/solution:rotate-90 mt-1 flex-none transition-transform"
        />

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            {entry && (
              <span className="text-dim font-mono text-[11px] lg:text-[12px]">
                {String(position + 1).padStart(2, "0")}
              </span>
            )}

            <span className="text-[15px] font-semibold">
              {entry?.name ?? problem}
            </span>

            {entry && (
              <span
                className={`font-mono text-[10.5px] whitespace-nowrap ${difficultyTone[entry.difficulty] ?? "text-ink-muted"}`}
              >
                {entry.difficulty}
              </span>
            )}
          </span>

          {entry?.idea && (
            <span className="text-ink-muted mt-1 block text-[13px] leading-normal">
              {entry.idea}
            </span>
          )}
        </span>
      </summary>

      <div className="border-line-soft mb-2 ml-2.5 border-l pt-1 pb-4 pl-4.5">
        {entry && (
          <a
            href={entry.url}
            target="_blank"
            rel="noreferrer"
            className="text-accent focus-visible:outline-accent mb-4 inline-flex items-center gap-1 font-mono text-[11.5px] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Open on LeetCode
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight size={12} aria-hidden />
          </a>
        )}

        {children}
      </div>
    </details>
  );
}
