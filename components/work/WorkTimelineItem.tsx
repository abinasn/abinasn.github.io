import { Reveal } from "@/components/ui/Reveal";
import { type WorkEntry } from "@/lib/work";
import { WorkCard } from "./WorkCard";

const STAGGER = 90;

const RAIL =
  "before:absolute before:inset-y-0 before:left-[calc(var(--rail-offset)*-1)] before:w-px";

const MARKER =
  "absolute top-0 left-[calc(var(--rail-offset)*-1_-_4.5px)] block size-2.5 -translate-y-1/2 rounded-full";

export function WorkTimelineItem({
  entry,
  index,
  isLast,
}: {
  entry: WorkEntry;
  index: number;
  isLast: boolean;
}) {
  const isCurrent = entry.endDate === null;

  return (
    <Reveal
      as="li"
      delay={index * STAGGER}
      className={`relative pb-10 md:pb-14 ${RAIL} ${
        isLast
          ? "before:bg-linear-to-b before:from-line before:to-transparent"
          : "before:bg-line"
      }`}
    >
      <span
        aria-hidden
        className={`${MARKER} ${isCurrent ? "bg-accent" : "bg-dim"}`}
      />

      {isCurrent && (
        <span
          aria-hidden
          className={`${MARKER} border-accent border`}
          style={{ animation: "ring 2.8s ease-out infinite" }}
        />
      )}

      <WorkCard entry={entry} />
    </Reveal>
  );
}
