import type { Problem } from "@/lib/content";
import { difficultyTone } from "./difficulty";

const COLUMNS =
  "lg:grid-cols-[54px_minmax(0,1.1fr)_82px_minmax(0,1.2fr)] lg:gap-x-4.5";

export function ProblemsTable({
  problems,
  id,
  heading = true,
}: {
  problems: Problem[];
  id?: string;
  heading?: boolean;
}) {
  return (
    <section className={heading ? "mt-12 mb-11" : "mt-6 mb-9"}>
      <div
        className={`mb-4 flex items-baseline gap-4 ${heading ? "justify-between" : "justify-end"}`}
      >
        {heading && (
          <h2
            id={id}
            className="scroll-mt-5 text-[19px] font-bold tracking-[-0.7px] md:text-[21px] lg:text-[22px]"
          >
            Problems
          </h2>
        )}
        <span className="text-dim font-mono text-[11.5px]">
          {problems.length} curated
        </span>
      </div>

      <div
        aria-hidden
        className={`text-placeholder hidden px-1.5 pb-2.5 font-mono text-[10px] tracking-[0.9px] uppercase lg:grid ${COLUMNS}`}
      >
        <span>#</span>
        <span>Problem</span>
        <span>Level</span>
        <span>Key idea</span>
      </div>

      <ul className="list-none">
        {problems.map((problem, i) => (
          <li key={problem.url}>
            <a
              href={problem.url}
              target="_blank"
              rel="noreferrer"
              className={`border-line-soft hover:bg-card focus-visible:outline-accent group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-2.5 gap-y-1 rounded-md border-t px-1.5 py-3.25 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 lg:items-center lg:gap-y-0 ${COLUMNS}`}
            >
              <span className="text-dim font-mono text-[11px] lg:text-[12px]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="group-hover:text-accent min-w-0 text-[15px] font-semibold transition-colors">
                {problem.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>

              <span
                className={`font-mono text-[10.5px] whitespace-nowrap ${difficultyTone[problem.difficulty] ?? "text-ink-muted"}`}
              >
                {problem.difficulty}
              </span>

              <span className="text-ink-muted col-span-3 text-[13px] leading-normal lg:col-span-1">
                {problem.idea}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
