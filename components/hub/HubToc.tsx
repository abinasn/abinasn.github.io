import { useCallback, useEffect, useRef, useState } from "react";
import type { TocItem } from "@/lib/toc";
import { subscribeScroll } from "./scrollEngine";

const LABEL_ID = "hub-toc-label";

const CLICK_LOCK_MS = 1200;

export function HubToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLLIElement>());
  const lockRef = useRef<{ id: string; until: number } | null>(null);
  const wroteUrl = useRef(false);

  useEffect(() => {
    const ids = items.map((item) => item.id);

    return subscribeScroll(({ line, atBottom }) => {
      let next: string | null = null;

      if (atBottom) {
        next = ids[ids.length - 1] ?? null;
      } else {
        for (const id of ids) {
          const element = document.getElementById(id);
          if (!element) continue;

          if (element.getBoundingClientRect().top - line <= 0) next = id;
          else break;
        }
      }

      const lock = lockRef.current;
      if (lock) {
        if (performance.now() > lock.until || next === lock.id) {
          lockRef.current = null;
        } else {
          return;
        }
      }

      setActive((current) => (current === next ? current : next));
    });
  }, [items]);

  useEffect(() => {
    if (!active && !wroteUrl.current) return;

    const base = window.location.pathname + window.location.search;
    const url = active ? `${base}#${active}` : base;

    if (url === base + window.location.hash) return;

    window.history.replaceState(window.history.state, "", url);
    wroteUrl.current = true;
  }, [active]);

  const measureFill = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const item = active ? itemRefs.current.get(active) : null;

    track.style.setProperty(
      "--toc-fill",
      item ? `${item.offsetTop + item.offsetHeight}px` : "0px"
    );
  }, [active]);

  useEffect(() => {
    measureFill();
  }, [measureFill]);

  useEffect(() => {
    let cancelled = false;

    void (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (!cancelled) measureFill();
    });

    window.addEventListener("resize", measureFill, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", measureFill);
    };
  }, [measureFill]);

  return (
    <nav
      aria-labelledby={LABEL_ID}
      className="sticky top-(--header-h) hidden h-(--screen-h) flex-col overflow-y-auto overscroll-contain pt-11 pb-10 xl:flex"
    >
      <p
        id={LABEL_ID}
        className="text-placeholder mb-3 font-mono text-[10px] tracking-[0.9px] uppercase"
      >
        On this page
      </p>

      <div ref={trackRef} className="border-line-soft relative border-l">
        <span
          aria-hidden
          className="bg-accent absolute top-0 -left-px w-px transition-[height] duration-200 ease-out"
          style={{ height: "var(--toc-fill, 0px)" }}
        />

        <ol className="list-none">
          {items.map((item) => (
            <li
              key={item.id}
              ref={(node) => {
                if (node) itemRefs.current.set(item.id, node);
                else itemRefs.current.delete(item.id);
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => {
                  lockRef.current = {
                    id: item.id,
                    until: performance.now() + CLICK_LOCK_MS,
                  };
                  setActive(item.id);
                }}
                aria-current={active === item.id ? "location" : undefined}
                className="text-ink-muted hover:text-ink focus-visible:outline-accent block py-1.5 pr-2 pl-3.5 text-[12.5px] leading-[1.45] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 aria-[current=location]:font-semibold aria-[current=location]:text-ink"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
