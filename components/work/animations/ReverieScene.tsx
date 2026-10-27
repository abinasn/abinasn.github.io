import { Fragment } from "react";
import type { SceneProps } from "../WorkAnimation";
import {
  Caret,
  CollaboratorCursor,
  DocIcon,
  PanelLabel,
  ProgressBar,
  StatusPill,
} from "./primitives";
import { useStagger, useTypewriter } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";

const BEATS = [
  ["file", 400],
  ["extract", 500],
  ["extracted", 1720],
  ["langs", 300],
  ["primary", 970],
  ["rows", 400],
  ["fill", 1120],
  ["review", 3200],
  ["approveFirst", 1450],
  ["approveRest", 450],
  ["stats", 1310],
] as const;

type Segment = { text: string; mark?: boolean };

const ROWS: {
  src: string;
  target: Segment[];
  tag: string;
  tone: "ok" | "warn" | "accent";
  instant?: boolean;
}[] = [
  {
    src: "File your income tax return online.",
    target: [{ text: "अपना आयकर रिटर्न ऑनलाइन दाखिल करें।" }],
    tag: "TM 100%",
    tone: "ok",
    instant: true,
  },
  {
    src: "Download Form 16 from the portal.",
    target: [
      { text: "पोर्टल से " },
      { text: "फ़ॉर्म 16", mark: true },
      { text: " डाउनलोड करें।" },
    ],
    tag: "TM 87%",
    tone: "warn",
  },
  {
    src: "Verify your bank account details.",
    target: [{ text: "अपने बैंक खाते का विवरण सत्यापित करें।" }],
    tag: "NMT",
    tone: "accent",
  },
  {
    src: "Contact the helpdesk for assistance.",
    target: [{ text: "सहायता के लिए हेल्पडेस्क से संपर्क करें।" }],
    tag: "NMT",
    tone: "accent",
  },
];

const SEGMENT_COUNTS = [64, 128, 196, 248];
const LANGUAGES = ["हिन्दी", "বাংলা", "தமிழ்", "+8"];
const REST = [0, 2, 3];

const STATS = [
  { label: "Translator efficiency", value: "70%", tail: "higher" },
  { label: "Glossary adherence", value: "100%", tail: "terms" },
  { label: "Marketplace", value: "5,000+", tail: "freelancers" },
];

export function ReverieScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 2600 });

  const extracted = useStagger(SEGMENT_COUNTS.length, {
    start: at("extract"),
    still,
    every: 430,
  });
  const langs = useStagger(LANGUAGES.length, { start: at("langs"), still, every: 180 });
  const loaded = useStagger(ROWS.length, { start: at("rows"), still, every: 180 });
  const filling = useStagger(ROWS.length, { start: at("fill"), still, every: 700 });
  const restApproved = useStagger(REST.length, { start: at("approveRest"), still, every: 320 });
  const stats = useStagger(STATS.length, { start: at("stats"), still, every: 220 });

  const done = at("extracted");

  const approvedRows = new Set<number>();
  if (at("approveFirst")) approvedRows.add(1);
  REST.slice(0, restApproved).forEach((index) => approvedRows.add(index));

  return (
    <div key={cycle} className="flex h-full flex-col">
      <div className="bg-scene-sunken border-scene-line mb-2 flex items-center gap-3 rounded-[10px] border px-2.5 py-2 @min-[640px]:gap-4 @min-[640px]:px-3.5 @min-[640px]:py-3">
        <div
          className={`hidden flex-none items-center gap-2 transition-[opacity,transform] duration-400 @min-[440px]:flex ${
            at("file") ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
        >
          <DocIcon />
          <div className="min-w-0">
            <div className="text-scene-ink truncate text-[10px] @min-[640px]:text-[12px]">
              taxpayer-guide.docx
            </div>
            <div className="text-scene-muted truncate text-[9px] @min-[640px]:text-[10.5px]">
              12 pages · uploaded
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-baseline justify-between gap-2">
            <span
              className={`truncate text-[9px] tracking-[0.4px] uppercase transition-colors duration-350 @min-[640px]:text-[10px] ${
                done ? "text-scene-muted" : "text-scene-faint"
              }`}
            >
              {done ? "Segments created · JSON" : "Extracting text"}
            </span>
            <span
              className={`flex-none font-mono text-[9px] transition-colors duration-350 @min-[640px]:text-[10.5px] ${
                done ? "text-scene-ok" : "text-scene-faint"
              }`}
            >
              {extracted > 0 ? SEGMENT_COUNTS[extracted - 1] : 0} segments
            </span>
          </div>
          <ProgressBar
            pct={(extracted / SEGMENT_COUNTS.length) * 100}
            height={2}
            duration={500}
          />
        </div>

        <div className="hidden flex-none gap-1 @min-[440px]:flex">
          {LANGUAGES.map((language, index) => (
            <span
              key={language}
              className={`rounded-md border px-1.5 py-0.75 text-[9px] whitespace-nowrap transition-all duration-300 @min-[640px]:px-2 @min-[640px]:text-[10.5px] ${
                index === 3 ? "text-scene-muted" : "font-indic"
              } ${
                index === 0 && at("primary")
                  ? "border-accent bg-accent/8 text-accent"
                  : "border-scene-line text-scene-faint"
              } ${langs > index ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
              style={
                index === 0 && at("primary")
                  ? {
                      boxShadow:
                        "0 0 0 3px color-mix(in oklab, var(--color-accent) 10%, transparent)",
                    }
                  : undefined
              }
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <PanelLabel>CAT tool · collaborative editor</PanelLabel>

      <div
        className="relative min-h-0 flex-1 [--row-gap:4px] [--row-h:30px] @min-[440px]:[--row-h:34px] @min-[640px]:[--row-gap:5px]"
      >
        {ROWS.map((row, index) => (
          <TranslationRow
            key={row.src}
            row={row}
            index={index}
            still={still}
            shown={loaded > index}
            filling={filling > index}
            filled={filling > index + 1 || at("review")}
            approved={approvedRows.has(index)}
          />
        ))}

        <CollaboratorCursor
          name="Ravi"
          tone="warn"
          shown={at("review")}
          row={at("approveFirst") ? 2 : 1}
          left="42%"
        />
        <CollaboratorCursor
          name="Meera"
          tone="alt"
          shown={at("review")}
          row={at("approveRest") ? 0 : 3}
          left="62%"
        />
      </div>

      <div className="mt-2 hidden gap-2 @min-[640px]:flex">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`bg-scene-sunken border-scene-line flex-1 rounded-lg border px-2.5 py-1.5 transition-[opacity,transform] duration-400 ${
              stats > index ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <div className="text-scene-faint mb-0.5 truncate text-[8.5px] tracking-[0.6px] uppercase">
              {stat.label}
            </div>
            <div className="text-scene-ink truncate text-[12px] font-semibold">
              <b className="text-accent font-semibold">{stat.value}</b> {stat.tail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TranslationRow({
  row,
  index,
  shown,
  filling,
  filled,
  approved,
  still,
}: {
  row: (typeof ROWS)[number];
  index: number;
  shown: boolean;
  filling: boolean;
  filled: boolean;
  approved: boolean;
  still: boolean;
}) {
  const plain = row.target.map((segment) => segment.text).join("");
  const typed = useTypewriter(plain, { start: filling && !row.instant, still });
  const revealed = row.instant ? (filling ? plain.length : 0) : typed;
  const typing = filling && !filled && revealed < plain.length;

  return (
    <div
      className={`mb-(--row-gap) grid h-(--row-h) grid-cols-[16px_1fr_14px] items-center gap-2 rounded-[7px] border px-1.5 transition-[opacity,transform,background-color,border-color] duration-400 @min-[440px]:grid-cols-[18px_1fr_1fr_14px] @min-[440px]:px-2 @min-[640px]:grid-cols-[20px_1fr_1fr_58px_14px] ${
        filled || approved ? "border-solid" : "border-dashed"
      } ${
        approved
          ? "border-scene-ok/35 bg-scene-ok/5"
          : filling && !filled
            ? "border-accent/55 bg-accent/6"
            : "border-scene-line bg-transparent"
      } ${shown ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
    >
      <span className="text-accent/70 font-mono text-[9px] @min-[640px]:text-[10px]">
        {index + 1}
      </span>

      <span className="text-scene-muted hidden truncate text-[10px] @min-[440px]:block @min-[640px]:text-[11.5px]">
        {shown ? row.src : ""}
      </span>

      <span className="font-indic text-scene-ink truncate text-[10px] @min-[640px]:text-[11.5px]">
        {row.target.map((segment, segmentIndex) => {
          const before = row.target
            .slice(0, segmentIndex)
            .reduce((total, part) => total + part.text.length, 0);
          const slice = segment.text.slice(0, Math.max(0, revealed - before));
          if (!slice) return null;

          return segment.mark ? (
            <mark
              key={segmentIndex}
              className="bg-scene-alt/20 text-scene-alt rounded-[3px] px-0.5"
            >
              {slice}
            </mark>
          ) : (
            <Fragment key={segmentIndex}>{slice}</Fragment>
          );
        })}
        {typing && <Caret />}
      </span>

      <span className="hidden justify-self-start @min-[640px]:block">
        <StatusPill tone={row.tone} shown={filling}>
          {row.tag}
        </StatusPill>
      </span>

      <span
        className={`text-[10px] transition-opacity duration-300 @min-[640px]:text-[11px] ${
          approved ? "text-scene-ok opacity-100" : "text-scene-faint opacity-0"
        }`}
      >
        ✓
      </span>
    </div>
  );
}
