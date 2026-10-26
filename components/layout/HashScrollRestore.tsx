import { useEffect } from "react";

export function HashScrollRestore() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));

    const release = () => {
      document.documentElement.style.removeProperty("scroll-behavior");
    };

    if (!id) {
      release();
      return;
    }

    let cancelled = false;

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    void fontsReady.then(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;

        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "instant", block: "start" });

        release();
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
