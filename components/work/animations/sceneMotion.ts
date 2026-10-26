import { useEffect, useState } from "react";

type MotionOptions = {
  start: boolean;
  still: boolean;
};

function easeOut(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function useCountUp(
  to: number,
  {
    start,
    still,
    duration = 900,
    format = (value: number) => String(Math.round(value)),
  }: MotionOptions & { duration?: number; format?: (value: number) => string },
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    if (still) {
      setValue(to);
      return;
    }

    let frame = 0;
    let startedAt: number | undefined;

    const step = (now: number) => {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(to * easeOut(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, still, to, duration]);

  return format(value);
}

export function useTypewriter(
  text: string,
  { start, still, cps = 140 }: MotionOptions & { cps?: number },
) {
  const total = text.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    if (still) {
      setCount(total);
      return;
    }

    let frame = 0;
    let startedAt: number | undefined;

    const step = (now: number) => {
      startedAt ??= now;
      const typed = Math.min(Math.round(((now - startedAt) / 1000) * cps), total);
      setCount(typed);
      if (typed < total) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, still, total, cps]);

  return count;
}

export function useStagger(
  count: number,
  { start, still, every = 120 }: MotionOptions & { every?: number },
) {
  const [entered, setEntered] = useState(0);

  useEffect(() => {
    if (!start) {
      setEntered(0);
      return;
    }

    if (still) {
      setEntered(count);
      return;
    }

    let current = 0;
    setEntered(0);

    const id = setInterval(() => {
      current += 1;
      setEntered(current);
      if (current >= count) clearInterval(id);
    }, every);

    return () => clearInterval(id);
  }, [start, still, count, every]);

  return entered;
}
