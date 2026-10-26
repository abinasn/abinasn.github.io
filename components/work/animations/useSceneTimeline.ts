import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";

export type Beat = readonly [name: string, delay: number];

export type SceneTimeline<Name extends string> = {
  at: (name: Name) => boolean;
  step: number;
  cycle: number;
  still: boolean;
};

const DEFAULT_HOLD = 3600;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

function getMotionServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeToMotion, getMotionSnapshot, getMotionServerSnapshot);
}

export function useSceneTimeline<B extends readonly Beat[]>(
  beats: B,
  active: boolean,
  options: { hold?: number } = {},
): SceneTimeline<B[number][0]> {
  const hold = options.hold ?? DEFAULT_HOLD;
  const still = usePrefersReducedMotion();
  const [state, setState] = useState({ step: -1, cycle: 0 });

  useEffect(() => {
    if (!active) {
      setState({ step: -1, cycle: 0 });
      return;
    }

    if (still) {
      setState({ step: beats.length - 1, cycle: 0 });
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    let step = -1;
    let cycle = 0;

    setState({ step, cycle });

    const schedule = () => {
      const next = step + 1;

      if (next < beats.length) {
        timer = setTimeout(() => {
          step = next;
          setState({ step, cycle });
          schedule();
        }, beats[next][1]);
        return;
      }

      timer = setTimeout(() => {
        step = -1;
        cycle += 1;
        setState({ step, cycle });
        schedule();
      }, hold);
    };

    schedule();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [beats, active, still, hold]);

  const indexOf = useMemo(() => {
    const map = new Map<string, number>();
    beats.forEach(([name], index) => map.set(name, index));
    return map;
  }, [beats]);

  const at = useCallback(
    (name: B[number][0]) => {
      const index = indexOf.get(name);
      return index !== undefined && state.step >= index;
    },
    [indexOf, state.step],
  );

  return { at, step: state.step, cycle: state.cycle, still };
}
