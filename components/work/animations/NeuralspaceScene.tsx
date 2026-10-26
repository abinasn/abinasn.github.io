import { useEffect, useRef } from "react";
import type { SceneProps } from "../WorkAnimation";
import { Caret, PanelLabel, PlayTriangle, ProgressBar, Waveform } from "./primitives";
import { useStagger, useTypewriter } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";

const BEATS = [
  ["persona", 400],
  ["sources", 450],
  ["learn", 980],
  ["trained", 1560],
  ["ask", 450],
  ["reply", 700],
  ["tone", 900],
  ["image", 800],
  ["art", 1150],
  ["music", 750],
  ["bars", 350],
  ["board", 1350],
  ["cards", 300],
  ["report", 3500],
  ["arrow", 1500],
] as const;

const SOURCES = ["notes.pdf", "script.docx", "ref-url"];
const CAPABILITIES = [
  { name: "Chat", on: "ask", done: "image" },
  { name: "Image", on: "image", done: "music" },
  { name: "Music", on: "music", done: "board" },
  { name: "Board", on: "board", done: "arrow" },
] as const;

const ASK = "Plot ideas for a heist graphic novel.";
const REPLY =
  "What if the vault holds memories, not gold — and the thief keeps one that isn't hers?";

const ARC = [30, 52, 42, 78, 96, 64, 40];

const CARDS = [
  { left: "2.2%", top: "5.7%", width: "42%", height: "30%" },
  { left: "50.6%", top: "3.8%", width: "31.5%", height: "33%" },
  { left: "3.9%", top: "42.9%", width: "37.6%", height: "22%" },
  { left: "48.3%", top: "46.7%", width: "42.7%", height: "36%" },
];

const LINKS = [
  "M158,38 C168,38 172,42 180,43",
  "M83,64 C83,76 88,80 88,90",
  "M148,113 C158,113 164,124 172,126",
];

const ARTWORK =
  "radial-gradient(circle at 28% 26%, color-mix(in oklab, var(--color-scene-alt) 55%, transparent), transparent 58%), radial-gradient(circle at 76% 68%, color-mix(in oklab, var(--color-accent) 45%, transparent), transparent 58%), radial-gradient(circle at 55% 90%, color-mix(in oklab, var(--color-scene-warn) 30%, transparent), transparent 60%), linear-gradient(160deg, color-mix(in oklab, var(--color-scene-media) 88%, var(--color-accent)), var(--color-scene-media))";

export function NeuralspaceScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 2600 });

  const sources = useStagger(SOURCES.length, { start: at("sources"), still, every: 260 });
  const learned = useStagger(SOURCES.length, { start: at("learn"), still, every: 520 });
  const bookmarks = useStagger(3, { start: at("cards"), still, every: 840 });
  const links = useStagger(LINKS.length, { start: at("report"), still, every: 280 });
  const arc = useStagger(ARC.length, { start: at("arrow"), still, every: 90 });

  const asked = useTypewriter(ASK, { start: at("ask"), still });
  const replied = useTypewriter(REPLY, { start: at("reply"), still });

  const trained = at("trained");
  const visibleMessages = [at("ask"), at("reply"), at("image"), at("music")];

  const chat = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = chat.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [visibleMessages.filter(Boolean).length, asked, replied]);

  const capabilityState = (capability: (typeof CAPABILITIES)[number]) =>
    at(capability.done) ? "done" : at(capability.on) ? "on" : "idle";

  return (
    <div key={cycle} className="flex h-full flex-col">
      <div className="bg-scene-sunken border-scene-line mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-[10px] border px-2.5 py-2 @min-[640px]:gap-4 @min-[640px]:px-3.5 @min-[640px]:py-3">
        <div
          className={`flex flex-none items-center gap-2 transition-[opacity,transform] duration-400 ${
            at("persona") ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
        >
          <span
            className="relative grid size-6 flex-none place-items-center rounded-full transition-shadow duration-500 @min-[640px]:size-7.5"
            style={{
              background:
                "conic-gradient(from 200deg, var(--color-accent), var(--color-scene-alt), var(--color-scene-warn), var(--color-accent))",
              boxShadow: trained
                ? "0 0 0 4px color-mix(in oklab, var(--color-accent) 12%, transparent)"
                : undefined,
            }}
          >
            <span className="bg-scene-sunken absolute inset-[2.5px] rounded-full" />
            {trained && (
              <span
                className="border-accent/70 absolute -inset-1 rounded-full border"
                style={{ animation: "ring 2.4s ease-out infinite" }}
              />
            )}
            <span className="text-scene-ink relative text-[10px] font-bold @min-[640px]:text-[11.5px]">
              S
            </span>
          </span>
          <div className="min-w-0">
            <div className="text-scene-ink truncate text-[10px] @min-[640px]:text-[12px]">
              Heist Storyteller
            </div>
            <div
              className={`truncate text-[9px] transition-colors duration-400 @min-[640px]:text-[10.5px] ${
                trained ? "text-scene-ok" : "text-scene-muted"
              }`}
            >
              {trained ? "trained on 3 sources" : "persona · your voice"}
            </div>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 @min-[440px]:block">
          <div className="mb-1.5 flex gap-1">
            {SOURCES.map((source, index) => {
              const isLearned = learned > index;
              return (
                <span
                  key={source}
                  className={`flex items-center gap-1 rounded-md border px-1.5 py-0.75 font-mono text-[8px] whitespace-nowrap transition-all duration-300 @min-[640px]:text-[9px] ${
                    isLearned
                      ? "border-scene-ok/35 bg-scene-ok/6 text-scene-ok"
                      : "border-scene-line text-scene-faint"
                  } ${sources > index ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                >
                  <i
                    className={`size-1 flex-none rounded-full ${
                      isLearned ? "bg-scene-ok" : "bg-scene-faint"
                    }`}
                  />
                  {source}
                </span>
              );
            })}
          </div>
          <ProgressBar pct={(learned / SOURCES.length) * 100} height={2} duration={600} />
        </div>

        <div className="flex min-w-0 flex-wrap gap-1">
          {CAPABILITIES.map((capability) => {
            const state = capabilityState(capability);
            return (
              <span
                key={capability.name}
                className={`rounded-full border px-1.5 py-0.75 text-[8px] whitespace-nowrap transition-all duration-300 @min-[640px]:px-2.5 @min-[640px]:text-[9.5px] ${
                  state === "done"
                    ? "border-scene-ok/35 bg-scene-ok/6 text-scene-ok"
                    : state === "on"
                      ? "border-accent bg-accent/8 text-accent"
                      : "border-scene-line text-scene-faint"
                }`}
                style={
                  state === "on"
                    ? {
                        boxShadow:
                          "0 0 0 3px color-mix(in oklab, var(--color-accent) 10%, transparent)",
                      }
                    : undefined
                }
              >
                {capability.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 gap-3">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <PanelLabel>Conversation</PanelLabel>
          <div
            ref={chat}
            className="bg-scene-sunken border-scene-line min-h-0 flex-1 overflow-hidden rounded-lg border p-2 @min-[640px]:p-2.5"
          >
            <Message role="You" shown={visibleMessages[0]} user>
              {ASK.slice(0, asked)}
              {at("ask") && !at("reply") && asked < ASK.length && <Caret />}
            </Message>

            <Message
              role="StorytellerAI"
              shown={visibleMessages[1]}
              starred={bookmarks > 0}
              footer={
                <span
                  className={`border-scene-alt/35 text-scene-alt mt-1.5 inline-flex items-center gap-1.5 rounded-full border px-1.5 py-0.5 text-[8px] transition-[opacity,transform] duration-350 @min-[640px]:text-[9px] ${
                    at("tone") ? "translate-y-0 opacity-100" : "translate-y-0.75 opacity-0"
                  }`}
                >
                  <i className="bg-scene-alt size-1 rounded-full" />
                  tone: playful · matched to your style
                </span>
              }
            >
              {REPLY.slice(0, replied)}
              {at("reply") && !at("tone") && replied < REPLY.length && <Caret />}
            </Message>

            <Message role="Generated image" shown={visibleMessages[2]} starred={bookmarks > 1}>
              <span
                className="relative block h-11.5 overflow-hidden rounded-md @min-[640px]:h-15.5"
                style={{ background: ARTWORK }}
              >
                <span
                  className="bg-scene absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: at("art") ? 0 : 1 }}
                >
                  <span
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(100deg, transparent 20%, color-mix(in oklab, var(--color-accent) 14%, transparent) 50%, transparent 80%)",
                      animation: "sweep 1.1s linear infinite",
                    }}
                  />
                </span>
              </span>
            </Message>

            <Message role="Generated music" shown={visibleMessages[3]} starred={bookmarks > 2}>
              <span className="flex items-center gap-2">
                <span className="border-accent/70 grid size-5 flex-none place-items-center rounded-full border">
                  <PlayTriangle live={at("bars")} />
                </span>
                <Waveform
                  count={36}
                  variant="music"
                  live={at("bars")}
                  className="h-5 flex-1 @min-[640px]:h-6"
                />
              </span>
              <span className="text-scene-muted mt-1 block truncate font-mono text-[8.5px] @min-[640px]:text-[9.5px]">
                the-heist-trailer.mp3 · 0:42
              </span>
            </Message>
          </div>
        </div>

        <div className="hidden min-h-0 min-w-0 flex-1 flex-col @min-[640px]:flex">
          <PanelLabel>Story board · infinite canvas</PanelLabel>
          <div
            className="border-scene-line bg-scene-sunken relative min-h-0 flex-1 overflow-hidden rounded-lg border"
            style={{
              backgroundImage: "radial-gradient(var(--color-scene-line) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <svg
              viewBox="0 0 356 210"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              {LINKS.map((path, index) => (
                <path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className="transition-opacity duration-500"
                  style={{ opacity: links > index ? 0.85 : 0 }}
                />
              ))}
            </svg>

            {CARDS.map((position, index) => (
              <div
                key={index}
                className={`bg-scene border-scene-line absolute overflow-hidden rounded-lg border px-2 py-1.5 transition-[opacity,transform] duration-450 ${
                  (index < 3 ? bookmarks > index : at("report"))
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-2 scale-95 opacity-0"
                }`}
                style={{
                  ...position,
                  transitionTimingFunction: "cubic-bezier(.34,1.4,.5,1)",
                }}
              >
                <div className="text-scene-faint mb-1 text-[8px] tracking-[0.6px] uppercase">
                  {["Idea", "Scene", "Score", "Report · story arc"][index]}
                </div>

                {index === 0 && (
                  <div className="text-scene-ink text-[10px] leading-tight">
                    A thief who steals memories, not gold.
                  </div>
                )}
                {index === 1 && (
                  <div className="h-9.5 rounded" style={{ background: ARTWORK }} />
                )}
                {index === 2 && (
                  <div className="text-scene-ink text-[10.5px]">the-heist-trailer · 0:42</div>
                )}
                {index === 3 && (
                  <div className="mt-1 flex h-8.5 items-end gap-0.75">
                    {ARC.map((height, barIndex) => (
                      <span
                        key={barIndex}
                        className="bg-accent/80 flex-1 rounded-t-xs"
                        style={{
                          height: arc > barIndex ? `${height}%` : "8%",
                          transition: "height 500ms cubic-bezier(.4,0,.2,1)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}

            <span
              className={`text-accent absolute right-2 bottom-1.5 text-[9px] transition-opacity duration-400 ${
                at("arrow") ? "opacity-100" : "opacity-0"
              }`}
            >
              export →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({
  role,
  shown,
  user = false,
  starred = false,
  footer,
  children,
}: {
  role: string;
  shown: boolean;
  user?: boolean;
  starred?: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`mb-2 transition-[opacity,transform] duration-350 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
      }`}
    >
      <div className="text-scene-faint mb-1 text-[8px] tracking-[0.6px] uppercase @min-[640px]:text-[8.5px]">
        {role}
      </div>
      <div
        className={`relative rounded-lg border py-1.5 pr-5 pl-2 text-[10px] leading-snug @min-[640px]:text-[11.5px] ${
          user ? "border-accent/60 bg-accent/7" : "border-scene-line bg-scene"
        }`}
      >
        <span className="text-scene-ink">{children}</span>
        <span
          className={`absolute top-1.5 right-1.5 text-[9px] leading-none transition-[color,transform] duration-300 @min-[640px]:text-[10px] ${
            starred ? "text-scene-warn scale-125" : "text-scene-faint"
          }`}
        >
          ★
        </span>
      </div>
      {footer}
    </div>
  );
}
