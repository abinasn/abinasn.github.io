import { Link } from "react-router";
import { LinkPending } from "@/components/ui/LinkPending";
import type { HubNote } from "@/lib/hub";

export function PrevNext({
  prev,
  next,
}: {
  prev: HubNote | null;
  next: HubNote | null;
}) {
  if (!prev || !next) return null;

  return (
    <nav
      aria-label="Note pagination"
      className="border-line mt-12 flex flex-col gap-3.5 border-t pt-6.5 sm:flex-row sm:justify-between"
    >
      <Link
        to={prev.href}
        className="border-line hover:border-ink focus-visible:outline-accent block rounded-2xl border px-4.5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:max-w-[46%]"
      >
        <span className="text-dim mb-1 block font-mono text-[10px] tracking-[0.8px] uppercase">
          ← Previous
        </span>
        <span className="block text-[14px] font-semibold">
          {prev.title}
          <LinkPending href={prev.href} />
        </span>
      </Link>

      <Link
        to={next.href}
        className="border-line hover:border-ink focus-visible:outline-accent block rounded-2xl border px-4.5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:max-w-[46%] sm:text-right"
      >
        <span className="text-dim mb-1 block font-mono text-[10px] tracking-[0.8px] uppercase">
          Next →
        </span>
        <span className="block text-[14px] font-semibold">
          {next.title}
          <LinkPending href={next.href} />
        </span>
      </Link>
    </nav>
  );
}
