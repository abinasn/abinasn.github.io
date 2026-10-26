import {
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { Minus, Plus, Search, X } from "lucide-react";
import { LinkPending } from "@/components/ui/LinkPending";
import type { HubEntry, HubTrack } from "@/lib/hub";

function filterEntries(entries: HubEntry[], q: string): HubEntry[] {
  return entries.flatMap<HubEntry>((entry) => {
    if (entry.kind === "note") {
      return entry.note.search.includes(q) ? [entry] : [];
    }

    const kept = filterEntries(entry.group.entries, q);
    if (kept.length === 0) return [];

    return [
      {
        kind: "group",
        group: { ...entry.group, entries: kept, noteCount: countNotes(kept) },
      },
    ];
  });
}

function countNotes(entries: HubEntry[]): number {
  return entries.reduce(
    (n, entry) =>
      n + (entry.kind === "note" ? 1 : countNotes(entry.group.entries)),
    0
  );
}

export function HubSidebar({
  tree,
  open,
  onClose,
  id,
  panelRef,
}: {
  tree: HubTrack[];
  open: boolean;
  onClose: () => void;
  id: string;
  panelRef: RefObject<HTMLElement | null>;
}) {
  const [query, setQuery] = useState("");
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const pathname = useLocation().pathname;

  const q = query.trim().toLowerCase();
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLInputElement>("input")?.focus();
  }, [open, panelRef]);

  const results = useMemo(
    () =>
      tree
        .map((track) => {
          const entries = q ? filterEntries(track.entries, q) : track.entries;
          return { ...track, entries, count: countNotes(entries) };
        })
        .filter((track) => track.count > 0),
    [tree, q]
  );

  const matches = results.reduce((n, track) => n + track.count, 0);

  return (
    <>
      {open && (
        <div
          aria-hidden
          onClick={onClose}
          className="bg-panel-deep/45 dark:bg-panel-deep/65 fixed inset-0 z-60 lg:hidden"
        />
      )}

      <aside
        id={id}
        ref={panelRef}
        data-open={open}
        {...(open
          ? { role: "dialog" as const, "aria-modal": true, "aria-label": "Notes navigation" }
          : {})}
        className="border-line bg-paper fixed inset-y-0 left-0 z-70 flex w-[78vw] max-w-80 -translate-x-full flex-col overscroll-contain border-r px-4 transition-transform duration-200 ease-out data-[open=true]:translate-x-0 lg:sticky lg:top-(--header-h) lg:z-auto lg:h-(--screen-h) lg:w-auto lg:max-w-none lg:translate-x-0 lg:pr-4 lg:pl-11.5"
      >
        <div className="flex flex-none items-center gap-2 pt-4 pb-3">
          <label htmlFor={`${id}-search`} className="sr-only">
            Search notes and problems
          </label>
          <div className="border-line bg-card focus-within:border-ink-muted flex min-w-0 flex-1 items-center gap-2.5 rounded-[9px] border px-3 py-2 transition-colors">
            <Search size={13} aria-hidden className="text-placeholder flex-none" />

            <input
              id={`${id}-search`}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notes and problems"
              className="text-ink min-w-0 flex-1 bg-transparent text-[13px] outline-none [&::-webkit-search-cancel-button]:hidden"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-dim hover:text-ink focus-visible:outline-accent font-mono text-[11px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                clear
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notes navigation"
            className="text-ink-soft hover:text-ink -mr-1 flex h-8 w-8 flex-none items-center justify-center transition-colors lg:hidden"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        <p aria-live="polite" className="sr-only">
          {q ? `${matches} notes match` : ""}
        </p>

        <nav
          aria-label="Notes"
          className="flex-1 overflow-y-auto overscroll-contain pt-0.5 pb-10"
        >
          {results.map((track) => {
            const current = pathname.startsWith(`/hub/${track.id}`);
            const expanded = q ? true : (toggled[track.id] ?? current);

            return (
              <div key={track.id} className="mb-0.5">
                <button
                  type="button"
                  onClick={() =>
                    setToggled((prev) => ({
                      ...prev,
                      [track.id]: !(prev[track.id] ?? current),
                    }))
                  }
                  aria-expanded={expanded}
                  aria-controls={`${id}-${track.id}`}
                  data-current={current}
                  className="group hover:bg-hover dark:hover:bg-chip data-[current=true]:bg-hover dark:data-[current=true]:bg-chip focus-visible:outline-accent flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span
                    aria-hidden
                    className="text-placeholder w-3.5 flex-none font-mono text-[9.5px]"
                  >
                    {track.index}
                  </span>

                  <span className="text-ink-soft group-data-[current=true]:text-ink flex-1 text-[13px] font-bold transition-colors">
                    {track.name}
                  </span>

                  <span className="text-placeholder font-mono text-[10px]">
                    {track.count}
                  </span>

                  {expanded ? (
                    <Minus size={11} aria-hidden className="text-placeholder flex-none" />
                  ) : (
                    <Plus size={11} aria-hidden className="text-placeholder flex-none" />
                  )}
                </button>

                {expanded && (
                  <div
                    id={`${id}-${track.id}`}
                    className="border-line-soft mt-0.5 mb-2 ml-5.75 flex flex-col border-l"
                  >
                    <EntryNodes
                      entries={track.entries}
                      trackId={track.id}
                      id={id}
                      pathname={pathname}
                      forceOpen={Boolean(q)}
                      toggled={toggled}
                      setToggled={setToggled}
                      onClose={onClose}
                    />
                  </div>
                )}
              </div>
            );
          })}

          {results.length === 0 && (
            <p className="text-dim px-3 py-3.5 text-[12.5px]">
              Nothing matches that yet.
            </p>
          )}
        </nav>
      </aside>
    </>
  );
}

function EntryNodes({
  entries,
  trackId,
  id,
  pathname,
  forceOpen,
  toggled,
  setToggled,
  onClose,
}: {
  entries: HubEntry[];
  trackId: string;
  id: string;
  pathname: string;
  forceOpen: boolean;
  toggled: Record<string, boolean>;
  setToggled: Dispatch<SetStateAction<Record<string, boolean>>>;
  onClose: () => void;
}) {
  return (
    <>
      {entries.map((entry) => {
        if (entry.kind === "note") {
          const active = pathname === entry.note.href;

          return (
            <Link
              key={entry.note.href}
              to={entry.note.href}
              onClick={onClose}
              aria-current={active ? "page" : undefined}
              className="text-ink-soft hover:text-ink focus-visible:outline-accent aria-[current=page]:border-accent aria-[current=page]:bg-hover aria-[current=page]:text-ink -ml-px border-l-2 border-transparent px-3 py-1.75 text-[12.5px] leading-[1.4] font-medium transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 aria-[current=page]:font-bold dark:aria-[current=page]:bg-chip"
            >
              {entry.note.title}
              <LinkPending href={entry.note.href} />
            </Link>
          );
        }

        const { group } = entry;
        const key = `${trackId}:${group.path}`;
        const current =
          pathname === group.href || pathname.startsWith(`${group.href}/`);
        const expanded = forceOpen ? true : (toggled[key] ?? true);
        const panelId = `${id}-${trackId}-${group.path.replace(/\//g, "-")}`;

        return (
          <div key={group.href} className="-ml-px border-l-2 border-transparent">
            <div className="flex items-center">
              <Link
                to={group.href}
                onClick={onClose}
                aria-current={pathname === group.href ? "page" : undefined}
                data-current={current}
                className="text-ink-soft hover:text-ink focus-visible:outline-accent data-[current=true]:text-ink min-w-0 flex-1 truncate px-3 py-1.75 text-[12.5px] leading-[1.4] font-bold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
              >
                {group.label}
                <LinkPending href={group.href} />
              </Link>

              <span className="text-placeholder font-mono text-[10px]">
                {group.noteCount}
              </span>

              <button
                type="button"
                onClick={() =>
                  setToggled((prev) => ({
                    ...prev,
                    [key]: !(prev[key] ?? current),
                  }))
                }
                aria-expanded={expanded}
                aria-controls={panelId}
                aria-label={`${expanded ? "Collapse" : "Expand"} ${group.label}`}
                className="text-placeholder hover:text-ink focus-visible:outline-accent flex h-6 w-6 flex-none items-center justify-center transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
              >
                {expanded ? (
                  <Minus size={11} aria-hidden />
                ) : (
                  <Plus size={11} aria-hidden />
                )}
              </button>
            </div>

            {expanded && (
              <div
                id={panelId}
                className="border-line-soft mt-0.5 mb-1 ml-3 flex flex-col border-l"
              >
                <EntryNodes
                  entries={group.entries}
                  trackId={trackId}
                  id={id}
                  pathname={pathname}
                  forceOpen={forceOpen}
                  toggled={toggled}
                  setToggled={setToggled}
                  onClose={onClose}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
