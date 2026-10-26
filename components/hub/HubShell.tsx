import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import type { HubTrack } from "@/lib/hub";
import { HubFooter } from "./HubFooter";
import { HubHeader } from "./HubHeader";
import { HubSidebar } from "./HubSidebar";

const NAV_ID = "hub-nav";

export function HubShell({
  tree,
  counts,
  updated,
  children,
}: {
  tree: HubTrack[];
  counts: { notes: number; problems: number };
  updated: string | null;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const pathname = useLocation().pathname;
  const [lastPath, setLastPath] = useState(pathname);

  const close = useCallback(() => setOpen(false), []);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <a
        href="#hub-main"
        className="border-line bg-card text-ink focus:ring-accent sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-80 focus:rounded-full focus:border focus:px-4 focus:py-2 focus:ring-2"
      >
        Skip to content
      </a>

      <HubHeader
        counts={counts}
        onOpenNav={() => setOpen((v) => !v)}
        navId={NAV_ID}
        navOpen={open}
        triggerRef={triggerRef}
      />

      <div className="grid w-full flex-1 items-start lg:grid-cols-[var(--hub-sidebar-w)_minmax(0,1fr)]">
        <HubSidebar
          tree={tree}
          open={open}
          onClose={close}
          id={NAV_ID}
          panelRef={panelRef}
        />

        <main id="hub-main" className="min-w-0" inert={open || undefined}>
          {children}
        </main>
      </div>

      <HubFooter
        counts={counts}
        updated={updated}
        inert={open || undefined}
      />
    </>
  );
}
