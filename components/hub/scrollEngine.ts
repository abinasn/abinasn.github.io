export interface ScrollFrame {
  progress: number;
  line: number;
  atBottom: boolean;
}

const ACTIVATION_SLACK = 24;

const subscribers = new Set<(frame: ScrollFrame) => void>();
let queued = false;
let frameId = 0;

function measure(): ScrollFrame {
  const de = document.documentElement;
  const max = de.scrollHeight - de.clientHeight;
  const header = document.querySelector<HTMLElement>("[data-hub-header]");

  return {
    progress: max > 0 ? Math.min(1, Math.max(0, de.scrollTop / max)) : 0,
    line: (header?.getBoundingClientRect().bottom ?? 0) + ACTIVATION_SLACK,
    atBottom: max - de.scrollTop <= 2,
  };
}

function flush() {
  queued = false;
  const frame = measure();
  for (const subscriber of subscribers) subscriber(frame);
}

function onScroll() {
  if (queued) return;
  queued = true;
  frameId = requestAnimationFrame(flush);
}

export function subscribeScroll(
  callback: (frame: ScrollFrame) => void
): () => void {
  subscribers.add(callback);

  if (subscribers.size === 1) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  callback(measure());

  return () => {
    subscribers.delete(callback);

    if (subscribers.size === 0) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frameId);
      queued = false;
    }
  };
}
