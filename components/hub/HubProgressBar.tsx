import { useEffect, useRef } from "react";
import { subscribeScroll } from "./scrollEngine";

export function HubProgressBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      subscribeScroll(({ progress }) => {
        const node = ref.current;
        if (node) node.style.transform = `scaleX(${progress})`;
      }),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 overflow-hidden"
    >
      <div
        ref={ref}
        className="bg-accent h-full w-full origin-left scale-x-0 will-change-transform"
      />
    </div>
  );
}
