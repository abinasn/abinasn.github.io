import { Link } from "react-router";
import { Menu } from "lucide-react";
import { HubProgressBar } from "./HubProgressBar";

export function HubHeader({
  counts,
  onOpenNav,
  navId,
  navOpen,
  triggerRef,
}: {
  counts: { notes: number; problems: number };
  onOpenNav: () => void;
  navId: string;
  navOpen: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <header
      data-hub-header
      className="border-line bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ height: "var(--header-h)" }}
    >
      <div className="flex h-full w-full items-center justify-between gap-3 px-5 md:px-8 lg:px-11.5">
        <div className="flex min-w-0 items-center gap-2 md:gap-3.5">
          <button
            type="button"
            ref={triggerRef}
            onClick={onOpenNav}
            aria-label="Open notes navigation"
            aria-expanded={navOpen}
            aria-controls={navId}
            className="text-ink-soft hover:text-ink focus-visible:outline-accent -ml-2 flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-2 lg:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>

          <Link
            to="/hub"
            className="focus-visible:outline-accent truncate text-[15px] font-extrabold tracking-[-0.4px] focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[16px]"
          >
            Learning Hub
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 md:gap-3.5">
          <span className="text-dim hidden font-mono text-[11.5px] whitespace-nowrap lg:inline">
            {counts.notes} notes · {counts.problems} problems
          </span>

          <Link
            to="/"
            className="border-line hover:border-ink rounded-full border px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors md:px-4"
          >
            <span aria-hidden>←</span>
            <span className="ml-1.5 hidden sm:inline">Portfolio</span>
            <span className="sr-only">Back to portfolio</span>
          </Link>
        </div>
      </div>

      <HubProgressBar />
    </header>
  );
}
