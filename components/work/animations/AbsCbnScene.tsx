import type { SceneProps } from "../WorkAnimation";
import {
  Badge,
  Caret,
  CollaboratorCursor,
  DocIcon,
  PanelLabel,
  PlayTriangle,
  Waveform,
} from "./primitives";
import { useStagger, useTypewriter } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";

const BEATS = [
  ["file", 400],
  ["pipeline", 450],
  ["type", 4250],
  ["play", 2050],
  ["review", 4830],
  ["select", 750],
  ["merge", 850],
] as const;

const STAGES = ["Prepare", "Extract audio", "AI model", "Standardize", "Save segments"];
const STOPS = [10, 32, 54, 76, 98];

const SEGMENTS = [
  { tc: "00:00:02", tx: "Hey everyone, welcome back." },
  { tc: "00:00:05", tx: "Today we're launching something new." },
  { tc: "00:00:09", tx: "A faster way to caption your videos." },
  { tc: "00:00:13", tx: "Let's take a quick look." },
];

const MERGED = 2;

export function AbsCbnScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 2400 });

  const stages = useStagger(STAGES.length, { start: at("pipeline"), still, every: 800 });
  const typed = useStagger(SEGMENTS.length, { start: at("type"), still, every: 400 });
  const played = useStagger(SEGMENTS.length, { start: at("play"), still, every: 1060 });

  const transcribing = at("pipeline") && !at("type");
  const live = stages > 1;
  const playing = at("play") && !at("review");
  const nowPlaying = playing ? played - 1 : -1;
  const caption = nowPlaying >= 0 ? SEGMENTS[nowPlaying]?.tx : undefined;

  return (
    <div key={cycle} className="flex h-full flex-col">
      <div className="bg-scene-sunken border-scene-line mb-2 flex items-center gap-3 rounded-[10px] border px-2.5 py-2 @min-[640px]:gap-4 @min-[640px]:px-3.5 @min-[640px]:py-3">
        <div
          className={`hidden flex-none items-center gap-2 transition-[opacity,transform] duration-400 @min-[640px]:flex ${at("file") ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
            }`}
        >
          <DocIcon />
          <div className="min-w-0">
            <div className="text-scene-ink truncate text-[12px]">launch_video.mp4</div>
            <div className="text-scene-muted truncate text-[10.5px]">04:12 · uploaded</div>
          </div>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="bg-scene-line absolute top-2.25 right-3 left-3 h-0.5 @min-[640px]:top-2.75">
            <div
              className="bg-accent h-0.5"
              style={{
                width: `${stages > 0 ? STOPS[stages - 1] : 0}%`,
                transition: "width 550ms linear",
              }}
            />
          </div>
          <div className="relative flex justify-between">
            {STAGES.map((stage, index) => {
              const done = stages > index + 1 || at("type");
              const current = stages === index + 1 && !at("type");

              return (
                <div key={stage} className="flex flex-col items-center">
                  <span
                    className={`grid size-5 place-items-center rounded-full border-[1.5px] text-[9px] transition-all duration-300 @min-[640px]:size-6 @min-[640px]:text-[11px] ${done
                      ? "border-scene-ok bg-scene-ok/8 text-scene-ok"
                      : current
                        ? "border-accent text-accent"
                        : "border-scene-line bg-scene-sunken text-scene-faint"
                      }`}
                    style={
                      current
                        ? {
                          boxShadow:
                            "0 0 0 4px color-mix(in oklab, var(--color-accent) 12%, transparent)",
                        }
                        : undefined
                    }
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`mt-1.5 hidden text-[9.5px] whitespace-nowrap transition-colors duration-300 @min-[640px]:block ${done || current ? "text-scene-ink" : "text-scene-faint"
                      }`}
                  >
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <span className="hidden @min-[640px]:block">
          <Badge shown={stages > 2}>88% accurate</Badge>
        </span>
      </div>

      <div className="flex min-h-0 flex-1 gap-2.5 @min-[440px]:gap-3">
        <div className="hidden min-h-0 w-[38%] flex-none flex-col @min-[440px]:flex">
          <PanelLabel>Source</PanelLabel>
          <div
            className="border-scene-line relative mb-2 grid min-h-15.5 flex-1 place-items-center overflow-hidden rounded-lg border"
            style={{
              background:
                "linear-gradient(160deg, color-mix(in oklab, var(--color-scene-media) 88%, var(--color-accent)), var(--color-scene-media))",
            }}
          >
            <PlayTriangle live={live} faded={playing} />

            <span
              className="text-scene-media-ink absolute inset-x-2 bottom-3 rounded px-1.5 py-0.75 text-center text-[9px] leading-tight transition-[opacity,transform] duration-250 @min-[640px]:text-[11px]"
              style={{
                background: "color-mix(in oklab, var(--color-scene-media) 70%, transparent)",
                opacity: caption ? 1 : 0,
                transform: caption ? "none" : "translateY(4px)",
              }}
            >
              {caption ?? ""}
            </span>

            <span
              className="absolute inset-x-0 bottom-0 h-0.75"
              style={{
                background: "color-mix(in oklab, var(--color-scene-media-ink) 12%, transparent)",
              }}
            >
              <span
                className="bg-accent block h-full"
                style={{
                  width: `${playing ? (played / SEGMENTS.length) * 100 : 0}%`,
                  transition: "width 300ms linear",
                }}
              />
            </span>
          </div>

          <Waveform count={44} live={live} className="h-6.5 flex-none @min-[640px]:h-8.5" />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <PanelLabel>Segments · collaborative editor</PanelLabel>
          <div className="relative min-h-0 flex-1 [--row-gap:4px] [--row-h:28px] @min-[440px]:[--row-h:34px] @min-[640px]:[--row-gap:5px] @min-[640px]:[--row-h:40px]">
            {SEGMENTS.map((segment, index) => (
              <TranscriptSegment
                key={segment.tc}
                segment={segment}
                still={still}
                shown={typed > index}
                typing={transcribing}
                selected={at("select") && index === 1}
                playing={nowPlaying === index}
                gone={at("merge") && index === MERGED}
              />
            ))}

            <CollaboratorCursor
              name="Ravi"
              tone="warn"
              shown={at("review")}
              row={at("select") ? 2 : 1}
              left="36%"
            />
            <CollaboratorCursor
              name="Meera"
              tone="alt"
              shown={at("review")}
              row={at("merge") ? 0 : 3}
              left="58%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TranscriptSegment({
  segment,
  shown,
  typing,
  selected,
  playing,
  gone,
  still,
}: {
  segment: { tc: string; tx: string };
  shown: boolean;
  typing: boolean;
  selected: boolean;
  playing: boolean;
  gone: boolean;
  still: boolean;
}) {
  const revealed = useTypewriter(segment.tx, { start: shown, still });
  const busy = shown && revealed < segment.tx.length && typing;

  return (
    <div
      className={`mb-(--row-gap) flex h-(--row-h) items-center gap-2 overflow-hidden rounded-[7px] border px-2 transition-[opacity,transform,background-color,border-color,height,margin,padding] duration-450 @min-[640px]:px-2.5 ${shown ? "border-solid" : "border-dashed"
        } ${playing
          ? "border-accent bg-accent/10"
          : selected
            ? "border-accent/55 bg-accent/6"
            : "border-scene-line"
        } ${gone
          ? "mb-0! h-0 -translate-y-1.5 border-transparent px-2 opacity-0"
          : shown
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0"
        }`}
    >
      <span
        className={`w-11 flex-none font-mono text-[9px] transition-colors duration-300 @min-[640px]:w-13 @min-[640px]:text-[10.5px] ${playing ? "text-accent" : "text-accent/70"
          }`}
      >
        {segment.tc}
      </span>
      <span className="text-scene-ink truncate text-[10px] @min-[640px]:text-[12.5px]">
        {segment.tx.slice(0, revealed)}
        {busy && <Caret />}
      </span>
    </div>
  );
}
