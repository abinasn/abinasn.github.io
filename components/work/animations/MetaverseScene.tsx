import type { SceneProps } from "../WorkAnimation";
import { Chip, PanelLabel, ProgressBar, StatTile, Unit } from "./primitives";
import { useCountUp, useStagger } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";


const BEATS = [
  ["stats", 400],
  ["courses", 730],
  ["enrol", 930],
  ["revenue", 1776],
  ["complete", 800],
  ["legend", 1912],
  ["foot", 400],
] as const;

const AVATARS = [
  "AK", "SR", "PM", "NV", "RJ", "TS", "DG", "KP",
  "MB", "AV", "SN", "HR", "GC", "IY", "LP", "VD",
  "JA", "RN", "BK", "CS", "EM", "FT", "OU",
];
const PENDING = [11, 18];

const DONE_RANK = new Map<number, number>();
AVATARS.forEach((_, index) => {
  if (!PENDING.includes(index)) DONE_RANK.set(index, DONE_RANK.size);
});

const REVENUE = 270000;
const COURSES = [
  { name: "Competitive Coding", modules: "14 modules", pct: 92, meta: "12 enrolled · 8 weeks" },
  { name: "Full-Stack Development", modules: "18 modules", pct: 88, meta: "11 enrolled · 10 weeks" },
];

const rupees = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;

export function MetaverseScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 3800 });

  const tiles = useStagger(3, { start: at("stats"), still, every: 160 });
  const courses = useStagger(COURSES.length, { start: at("courses"), still, every: 240 });
  const enrolled = useStagger(AVATARS.length, { start: at("enrol"), still, every: 62 });
  const finished = useStagger(DONE_RANK.size, { start: at("complete"), still, every: 72 });

  const revenue = useCountUp(REVENUE, {
    start: at("revenue"),
    still,
    duration: 1100,
    format: rupees,
  });

  const completion =
    finished >= DONE_RANK.size ? 90 : Math.round((finished / AVATARS.length) * 100);

  return (
    <div key={cycle} className="flex h-full flex-col gap-2 @min-[640px]:gap-2.5">
      <div className="flex gap-1.5 @min-[440px]:gap-2">
        <StatTile shown={tiles > 0} label="Students enrolled" short="Cohort" value={enrolled} />
        <StatTile shown={tiles > 1} label="Revenue" value={revenue} />
        <StatTile
          shown={tiles > 2}
          label="Course completion"
          short="Done"
          tone="accent"
          value={
            <>
              {completion}
              <Unit>%</Unit>
            </>
          }
        />
      </div>

      <div className="flex min-h-0 flex-1 gap-2.5 @min-[440px]:gap-3">
        <div className="hidden min-h-0 min-w-0 flex-1 flex-col @min-[440px]:flex">
          <PanelLabel>Courses</PanelLabel>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-2">
            {COURSES.map((course, index) => (
              <div
                key={course.name}
                className={`bg-scene-sunken border-scene-line rounded-lg border px-2.5 py-2 transition-[opacity,transform] duration-400 ease-out @min-[640px]:px-3 @min-[640px]:py-2.5 ${courses > index ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                  }`}
              >
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <span className="text-scene-ink truncate text-[10px] @min-[640px]:text-[12px]">
                    {course.name}
                  </span>
                  <span className="text-scene-faint flex-none font-mono text-[8px] @min-[640px]:text-[9.5px]">
                    {course.modules}
                  </span>
                </div>
                <ProgressBar pct={courses > index ? course.pct : 0} height={3} duration={800} />
                <div className="text-scene-muted mt-1.5 truncate text-[8.5px] @min-[640px]:text-[9.5px]">
                  {course.meta}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <PanelLabel>Cohort progress</PanelLabel>

          <div className="bg-scene-sunken border-scene-line flex min-h-0 min-w-0 flex-1 flex-col justify-center overflow-hidden rounded-lg border">
            <div className="grid w-full grid-cols-12 gap-1 px-3 pb-3 @min-[640px]:gap-1.5 @min-[640px]:px-4
                [&>*:nth-child(12n)]:justify-self-end [&>*:nth-child(12n+1)]:justify-self-start">
              {AVATARS.map((initials, index) => {
                const shown = enrolled > index;
                const rank = DONE_RANK.get(index);
                const done = rank !== undefined && finished > rank;

                return (
                  <span
                    key={initials}
                    className={`grid aspect-square w-full max-w-6 place-items-center justify-self-center rounded-full border text-[6px] font-semibold @min-[640px]:max-w-7 @min-[640px]:text-[7px] ${done
                      ? "border-scene-ok/45 bg-scene-ok/7 text-scene-ok"
                      : "border-scene-line bg-scene text-scene-faint"
                      } ${shown ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                    style={{
                      transition:
                        "opacity 300ms ease, transform 350ms cubic-bezier(.34,1.5,.5,1), color 350ms ease, border-color 350ms ease, background-color 350ms ease",
                    }}
                  >
                    {initials}
                  </span>
                );
              })}
            </div>
            <div className="border-scene-line border-t">
              <div
                className={`text-scene-muted flex gap-3 px-3 pb-2 text-[8px] transition-opacity duration-400 @min-[640px]:px-4 @min-[640px]:py-2.5 @min-[640px]:text-[9px] ${at("legend") ? "opacity-100" : "opacity-0"
                  }`}
              >
                <span className="flex items-center gap-1.5">
                  <i className="bg-scene-ok size-1.5 rounded-full" />
                  21 completed
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="bg-scene-faint size-1.5 rounded-full" />2 in progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border-scene-line hidden gap-1.5 border-t pt-2.5 transition-[opacity,transform] duration-400 @min-[640px]:flex ${at("foot") ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
      >
        <Chip>PHP Laravel</Chip>
        <Chip>MySQL</Chip>
        <Chip>Redis</Chip>
      </div>
    </div>
  );
}
