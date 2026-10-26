import { Fragment } from "react";
import type { SceneProps } from "../WorkAnimation";
import { Chip, PanelLabel, StatusPill } from "./primitives";
import { useStagger } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";

const BEATS = [
  ["tickets", 400],
  ["fix1", 950],
  ["guide", 600],
  ["aligned", 350],
  ["fixed1", 900],
  ["fix2", 700],
  ["toolbar", 600],
  ["fixed2", 850],
  ["fix3", 700],
  ["invalid", 600],
  ["message", 220],
  ["fixed3", 850],
  ["foot", 650],
] as const;

const TICKETS = [
  {
    id: "UI-1042",
    title: "Field labels misaligned across browsers",
    start: "fix1",
    done: "fixed1",
  },
  {
    id: "UI-1058",
    title: "Add a plant filter above the form",
    start: "fix2",
    done: "fixed2",
  },
  {
    id: "UI-1071",
    title: "No inline message on invalid quantity",
    start: "fix3",
    done: "fixed3",
  },
] as const;

const ROWS: {
  label: string;
  value: string;
  skew: number;
  gap: number;
  invalid?: boolean;
  wide?: boolean;
}[] = [
  { label: "Plant", value: "Korbach · DE", skew: 0.7, gap: 1.55 },
  { label: "Article number", value: "ART-40921-XR", skew: 1.18, gap: 0.55 },
  { label: "Quantity", value: "1200", skew: 0.8, gap: 1.65, invalid: true },
  { label: "Delivery date", value: "18.11.2016", skew: 1.05, gap: 0.65, wide: true },
];

const INPUT_EDGE = "calc(var(--lb-w) + 8px)";

const ALIGN = "500ms cubic-bezier(.4,0,.2,1)";

const STATE = {
  open: { label: "open", tone: "idle" },
  active: { label: "in progress", tone: "accent" },
  fixed: { label: "fixed", tone: "ok" },
} as const;

export function CapgeminiScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 3000 });

  const queued = useStagger(TICKETS.length, { start: at("tickets"), still, every: 150 });

  const states = TICKETS.map((ticket) =>
    at(ticket.done) ? "fixed" : at(ticket.start) ? "active" : "open",
  );

  const aligned = at("aligned");
  const guide = at("guide") && !at("fixed1");
  const showToolbar = at("toolbar");
  const showMessage = at("message");

  const current = states.findLastIndex((state) => state !== "open");

  return (
    <div key={cycle} className="flex h-full flex-col gap-2 @min-[640px]:gap-2.5">
      <div className="flex min-h-0 flex-1 gap-2.5 @min-[440px]:gap-3">
        <div className="hidden w-36 min-h-0 flex-none flex-col @min-[440px]:flex @min-[640px]:w-44">
          <PanelLabel>UI tickets</PanelLabel>
          <div className="flex flex-col gap-1.5 @min-[640px]:gap-2">
            {TICKETS.map((ticket, index) => {
              const state = STATE[states[index]];

              return (
                <div
                  key={ticket.id}
                  className={`rounded-lg border px-2 py-1.5 transition-[opacity,transform,background-color,border-color] duration-350 ease-out @min-[640px]:px-2.5 @min-[640px]:py-2 ${
                    states[index] === "fixed"
                      ? "border-scene-ok/35 bg-scene-ok/5"
                      : states[index] === "active"
                        ? "border-accent/55 bg-accent/6"
                        : "border-scene-line border-dashed"
                  } ${queued > index ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                >
                  <div className="mb-1 flex items-center justify-between gap-1">
                    <span className="text-accent/70 font-mono text-[9px] @min-[640px]:text-[9.5px]">
                      {ticket.id}
                    </span>
                    <StatusPill tone={state.tone}>{state.label}</StatusPill>
                  </div>
                  <div className="text-scene-ink line-clamp-2 text-[10px] leading-[1.35] @min-[640px]:text-[11px]">
                    {ticket.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <PanelLabel>Portal screen</PanelLabel>
          <div className="bg-scene-sunken border-scene-line flex min-h-0 min-w-0 flex-1 flex-col rounded-lg border p-2.5 @min-[640px]:p-3.5">
            <div className="border-scene-line mb-2 flex items-center justify-between gap-2 border-b pb-1.5 @min-[640px]:mb-2.5 @min-[640px]:pb-2">
              <span className="text-scene-ink truncate text-[10.5px] @min-[640px]:text-[11.5px]">
                Maintenance request
              </span>

              <span className="text-scene-faint hidden flex-none font-mono text-[9px] @min-[440px]:block @min-[640px]:text-[9.5px]">
                portal · iView
              </span>

              {current >= 0 && (
                <span className="flex-none @min-[440px]:hidden">
                  <StatusPill tone={STATE[states[current]].tone}>
                    {TICKETS[current].id} · {STATE[states[current]].label}
                  </StatusPill>
                </span>
              )}
            </div>

            <div
              className="flex items-center gap-1.5 overflow-hidden @min-[640px]:gap-2"
              style={{
                maxHeight: showToolbar ? 28 : 0,
                opacity: showToolbar ? 1 : 0,
                marginBottom: showToolbar ? 9 : 0,
                transition: "max-height 450ms ease, opacity 400ms ease, margin 450ms ease",
              }}
            >
              <Select label="Plant" value="Korbach" />
              <Select label="Period" value="Last 30 days" wide />
              <span className="bg-accent text-scene-inverse flex-none rounded-[5px] px-2 py-0.75 text-[9px] font-semibold @min-[640px]:px-2.5 @min-[640px]:py-1 @min-[640px]:text-[10px]">
                Apply
              </span>
            </div>

            <div className="relative [--lb-w:62px] [--row-gap:5px] @min-[440px]:[--lb-w:70px] @min-[440px]:[--row-gap:6px] @min-[640px]:[--lb-w:80px] @min-[640px]:[--row-gap:7px]">
              <div
                className="bg-accent absolute -top-0.5 -bottom-0.5 w-px transition-opacity duration-350"
                style={{ left: INPUT_EDGE, opacity: guide ? 0.55 : 0 }}
              />

              {ROWS.map((row) => {
                const invalid = row.invalid && at("invalid");

                return (
                  <Fragment key={row.label}>
                    <div
                      className={`items-center gap-2 ${row.wide ? "hidden @min-[440px]:flex" : "flex"}`}
                      style={{
                        marginBottom: aligned
                          ? "var(--row-gap)"
                          : `calc(var(--row-gap) * ${row.gap})`,
                        transition: `margin ${ALIGN}`,
                      }}
                    >
                      <span
                        className="text-scene-muted flex-none truncate text-[9.5px] @min-[640px]:text-[10.5px]"
                        style={{
                          width: aligned
                            ? "var(--lb-w)"
                            : `calc(var(--lb-w) * ${row.skew})`,
                          transition: `width ${ALIGN}`,
                        }}
                      >
                        {row.label}
                      </span>
                      <span
                        className={`bg-scene text-scene-ink flex h-5 min-w-0 flex-1 items-center truncate rounded-[5px] border px-2 text-[9px] transition-[background-color,border-color] duration-350 @min-[640px]:h-5.5 @min-[640px]:text-[10px] ${
                          invalid ? "border-scene-warn/55 bg-scene-warn/6" : "border-scene-line"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>

                    {row.invalid && (
                      <div
                        className="text-scene-warn overflow-hidden text-[9px] @min-[640px]:text-[9.5px]"
                        style={{
                          marginLeft: INPUT_EDGE,
                          maxHeight: showMessage ? 16 : 0,
                          opacity: showMessage ? 1 : 0,
                          marginBottom: showMessage ? "var(--row-gap)" : 0,
                          transition:
                            "max-height 400ms ease, opacity 350ms ease, margin 400ms ease",
                        }}
                      >
                        Enter a quantity between 1 and 999
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border-scene-line hidden items-center gap-2 border-t pt-2.5 transition-[opacity,transform] duration-400 @min-[640px]:flex ${
          at("foot") ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <Chip>SAP Enterprise Portal</Chip>
        <Chip>jQuery</Chip>
        <Chip>CSS3</Chip>
        <span className="text-scene-muted ml-auto truncate font-mono text-[9.5px]">
          first production codebase
        </span>
      </div>
    </div>
  );
}

function Select({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <span
      className={`border-accent/55 bg-accent/6 text-scene-ink flex-none items-center gap-1 rounded-[5px] border px-1.5 py-0.75 text-[9px] whitespace-nowrap @min-[640px]:px-2 @min-[640px]:py-1 @min-[640px]:text-[10px] ${
        wide ? "hidden @min-[440px]:flex" : "flex"
      }`}
    >
      <span className="text-scene-faint">{label}</span>
      {value} ▾
    </span>
  );
}
