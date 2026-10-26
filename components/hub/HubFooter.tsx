import { Link } from "react-router";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function HubFooter({
  counts,
  updated,
  inert,
}: {
  counts: { notes: number; problems: number };
  updated: string | null;
  inert?: true;
}) {
  return (
    <footer className="border-line border-t" inert={inert}>
      <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2.5 px-5 py-3.5 md:px-8 lg:px-11.5">
        <p className="text-dim font-mono text-[11.5px]">
          {counts.notes} notes · {counts.problems} problems
        </p>

        {updated && (
          <p className="text-dim hidden font-mono text-[11.5px] sm:block">
            Last addition {updated}
          </p>
        )}

        <div className="ml-auto flex items-center gap-3.5">
          <Link
            to="/"
            className="text-ink-soft hover:text-ink focus-visible:outline-accent font-mono text-[11.5px] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span aria-hidden>←</span> Portfolio
          </Link>

          <ThemeToggle compact />
        </div>
      </div>
    </footer>
  );
}
