import { useEffect, useRef, useState, type ComponentType } from "react";
import { AbsCbnScene } from "./animations/AbsCbnScene";
import { CapgeminiScene } from "./animations/CapgeminiScene";
import { MetaverseScene } from "./animations/MetaverseScene";
import { NeuralspaceScene } from "./animations/NeuralspaceScene";
import { ReverieScene } from "./animations/ReverieScene";
import { TripbornScene } from "./animations/TripbornScene";
import { ScenePlaceholder } from "./ScenePlaceholder";

export type SceneProps = {
  active: boolean;
};

const SCENES: Partial<Record<string, ComponentType<SceneProps>>> = {
  "abs-cbn": AbsCbnScene,
  neuralspace: NeuralspaceScene,
  reverie: ReverieScene,
  tripborn: TripbornScene,
  metaverse: MetaverseScene,
  capgemini: CapgeminiScene,
};

const ROOT_MARGIN = "120px";

export function WorkAnimation({
  slug,
  product,
  subject,
}: {
  slug: string;
  product: string;
  subject: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Scene = SCENES[slug] ?? ScenePlaceholder;

  return (
    <div
      ref={ref}
      aria-hidden
      className="border-scene-line bg-scene @container relative overflow-hidden rounded-xl border shadow-(--shadow-scene)"
    >
      <div className="border-scene-line bg-scene-sunken flex items-center gap-2 border-b px-3.5 py-2.5">
        <span className="bg-scene-faint/60 size-2 rounded-full" />
        <span className="bg-scene-faint/60 size-2 rounded-full" />
        <span className="bg-scene-faint/60 size-2 rounded-full" />
        <span className="text-scene-muted ml-2 truncate text-[11px] @min-[440px]:text-[12.5px]">
          {product} — <b className="text-scene-ink font-semibold">{subject}</b>
        </span>
      </div>

      <div className="h-60 p-4 @min-[440px]:h-70 @min-[640px]:h-80 @min-[640px]:px-5 @min-[640px]:pt-4.5 @min-[640px]:pb-5">
        <Scene active={active} />
      </div>
    </div>
  );
}
