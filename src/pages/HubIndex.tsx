import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { flattenNotes, getHubCounts, getHubTree } from "@/lib/hub";

export function HubIndex() {
  const tree = getHubTree();
  const counts = getHubCounts(tree);

  const recent = [...flattenNotes(tree)]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="w-full px-5 md:px-8 lg:px-11.5">
      <div className="mx-auto w-full max-w-hub pt-7 pb-18 md:pt-10 md:pb-24 lg:pt-11 lg:pb-28">
      <h1 className="text-[30px] leading-[1.1] font-extrabold tracking-[-1px] md:text-[36px] md:tracking-[-1.4px] lg:text-[42px] lg:tracking-[-1.8px]">
        Learning hub
      </h1>

      <p className="text-ink-soft mt-4 text-[16px] leading-[1.6] text-pretty md:text-[17px] lg:text-[18px]">
        Notes I keep while sharpening system design, data structures and AI
        engineering. Written to be re-read, not to be finished.
      </p>

      <p className="text-dim border-line mt-5.5 border-b pb-8 font-mono text-[11.5px]">
        {counts.notes} notes · {counts.problems} problems · {tree.length} tracks
      </p>

      <ul className="mt-9 grid list-none gap-3 sm:grid-cols-2">
        {tree.map((track) => (
          <li key={track.id}>
            <Link
              to={`/hub/${track.id}`}
              className="border-line hover:border-ink focus-visible:outline-accent group flex h-full flex-col rounded-2xl border p-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span className="text-placeholder font-mono text-[9.5px]">
                {track.index}
              </span>

              <span className="group-hover:text-accent mt-1.5 text-[17px] font-bold transition-colors">
                {track.name}
              </span>

              <span className="text-ink-muted mt-1.5 flex-1 text-[13.5px] leading-[1.55]">
                {track.blurb}
              </span>

              <span className="text-dim mt-4 flex items-center gap-1.5 font-mono text-[11px]">
                {track.notes.length} notes
                <ArrowRight
                  size={12}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {recent.length > 0 && (
        <section className="mt-12">
          <h2 className="text-[19px] font-bold tracking-[-0.7px] md:text-[21px] lg:text-[22px]">
            Latest
          </h2>

          <ul className="border-line mt-4 list-none border-t">
            {recent.map((note) => (
              <li key={note.href}>
                <Link
                  to={note.href}
                  className="border-line-soft hover:bg-card focus-visible:outline-accent group grid grid-cols-1 items-baseline gap-x-4 gap-y-0.5 rounded-md border-b px-1.5 py-4 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 sm:grid-cols-[minmax(0,1fr)_auto]"
                >
                  <span className="group-hover:text-accent text-[15px] font-semibold transition-colors">
                    {note.title}
                  </span>
                  <span className="text-dim font-mono text-[11px]">
                    {note.trackName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      </div>
    </div>
  );
}
