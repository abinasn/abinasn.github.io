import type { CSSProperties, ReactNode } from "react";

type Tone = "accent" | "ok" | "warn" | "bad" | "alt";

const FILL: Record<Tone, string> = {
  accent: "bg-accent",
  ok: "bg-scene-ok",
  warn: "bg-scene-warn",
  bad: "bg-scene-bad",
  alt: "bg-scene-alt",
};

const TEXT: Record<Tone | "ink" | "muted", string> = {
  accent: "text-accent",
  ok: "text-scene-ok",
  warn: "text-scene-warn",
  bad: "text-scene-bad",
  alt: "text-scene-alt",
  ink: "text-scene-ink",
  muted: "text-scene-muted",
};
export function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-scene-faint mb-2 text-[9px] tracking-[0.6px] uppercase @min-[440px]:text-[9.5px]">
      {children}
    </div>
  );
}

export function ProgressBar({
  pct,
  tone = "accent",
  height = 4,
  duration = 700,
  className = "",
}: {
  pct: number;
  tone?: Tone;
  height?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={`bg-scene-line overflow-hidden rounded-full ${className}`}
      style={{ height }}
    >
      <div
        className={`h-full rounded-full ${FILL[tone]}`}
        style={{
          width: `${pct}%`,
          transition: `width ${duration}ms cubic-bezier(.4,0,.2,1)`,
        }}
      />
    </div>
  );
}

export function StatTile({
  label,
  short,
  value,
  tone = "ink",
  shown,
}: {
  label: ReactNode;

  short?: ReactNode;
  value: ReactNode;
  tone?: Tone | "ink";
  shown: boolean;
}) {
  return (
    <div
      className={`bg-scene-sunken border-scene-line min-w-0 flex-1 rounded-[10px] border px-1.5 py-1.5 transition-[opacity,transform] duration-400 ease-out @min-[440px]:px-3 @min-[440px]:py-2.5 ${shown ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
        }`}
    >
      <div className="text-scene-faint mb-1 truncate text-[7px] tracking-[0.3px] uppercase @min-[440px]:text-[8.5px] @min-[440px]:tracking-[0.6px]">
        {short ? (
          <>
            <span className="@min-[440px]:hidden">{short}</span>
            <span className="hidden @min-[440px]:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </div>
      <div
        className={`text-[13px] leading-none font-semibold tabular-nums @min-[440px]:text-[16px] @min-[640px]:text-[19px] ${TEXT[tone]}`}
      >
        {value}
      </div>
    </div>
  );
}

export function Unit({ children }: { children: ReactNode }) {
  return <small className="text-scene-muted ml-0.5 text-[0.6em] font-normal">{children}</small>;
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="border-accent/45 bg-accent/7 text-accent rounded-md border px-1.5 py-0.75 font-mono text-[8.5px] whitespace-nowrap @min-[440px]:px-2 @min-[440px]:text-[9.5px]">
      {children}
    </span>
  );
}

export function Badge({ children, shown }: { children: ReactNode; shown: boolean }) {
  return (
    <span
      className={`border-accent/55 text-accent flex-none rounded-full border px-2 py-0.75 text-[9.5px] whitespace-nowrap transition-opacity duration-400 @min-[440px]:px-2.5 @min-[440px]:text-[10.5px] ${shown ? "opacity-100" : "opacity-0"
        }`}
    >
      {children}
    </span>
  );
}

export function StatusPill({
  children,
  tone = "idle",
  shown = true,
  glow = false,
}: {
  children: ReactNode;
  tone?: "idle" | "accent" | "ok" | "warn";
  shown?: boolean;
  glow?: boolean;
}) {
  const tones = {
    idle: "border-scene-line text-scene-muted",
    accent: "border-accent text-accent bg-accent/8",
    ok: "border-scene-ok/45 text-scene-ok bg-scene-ok/7",
    warn: "border-scene-warn/45 text-scene-warn bg-scene-warn/7",
  } as const;

  return (
    <span
      className={`rounded-full border px-2 py-0.75 text-[8.5px] whitespace-nowrap transition-all duration-400 @min-[440px]:text-[9.5px] ${tones[tone]} ${shown ? "opacity-100" : "opacity-0"
        }`}
      style={glow ? { boxShadow: "0 0 0 3px color-mix(in oklab, var(--color-accent) 10%, transparent)" } : undefined}
    >
      {children}
    </span>
  );
}

export function SceneRow({
  shown,
  slide = "x",
  className = "",
  style,
  children,
}: {
  shown: boolean;
  slide?: "x" | "y" | "none";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const hidden =
    slide === "x" ? "translate-x-2 opacity-0" : slide === "y" ? "translate-y-1.5 opacity-0" : "opacity-0";

  return (
    <div
      className={`transition-[opacity,transform] duration-350 ease-out ${shown ? "translate-x-0 translate-y-0 opacity-100" : hidden
        } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function CollaboratorCursor({
  name,
  tone,
  row,
  left,
  shown,
}: {
  name: string;
  tone: "warn" | "alt";
  row: number;
  left: string;
  shown: boolean;
}) {
  return (
    <span
      className={`text-scene-inverse pointer-events-none absolute flex items-center gap-1.5 rounded-md rounded-bl-none px-1.5 py-0.5 text-[9px] font-bold whitespace-nowrap @min-[640px]:text-[9.5px] ${tone === "warn" ? "bg-scene-warn" : "bg-scene-alt"
        } ${shown ? "opacity-100" : "opacity-0"}`}
      style={{
        top: `calc((var(--row-h) + var(--row-gap)) * ${row} - 14px)`,
        left,
        transition:
          "top 800ms cubic-bezier(.4,0,.2,1), left 800ms cubic-bezier(.4,0,.2,1), opacity 400ms ease",
      }}
    >
      <i className="bg-scene-inverse size-1.25 flex-none rounded-full" />
      {name}
    </span>
  );
}

type WaveVariant = "voice" | "music";

const WAVE: Record<
  WaveVariant,
  {
    peak: (i: number) => number;
    delay: (i: number) => number;
    period: string;
    bar: string;
    rest: number;
  }
> = {
  voice: {
    peak: (i) =>
      (i * 5) % 13 < 2 ? 12 : Math.round(28 + Math.abs(Math.sin(i * 1.7) + Math.sin(i * 0.53)) * 34),
    delay: (i) => ((i * 29) % 110) / 100,
    period: "0.95s",
    bar: "max-w-[3px] rounded-xs",
    rest: 0.6,
  },
  music: {
    peak: (i) => {
      const beat = i % 4 === 0 ? 1 : i % 2 === 0 ? 0.78 : 0.6;
      const swell = 0.75 + 0.25 * Math.sin(i * 0.32);
      return Math.round(30 + beat * swell * 62);
    },
    delay: (i) => (i % 8) * 0.08,
    period: "1.5s",
    bar: "max-w-1.5 rounded-sm",
    rest: 0.82,
  },
};

export function Waveform({
  count,
  live,
  variant = "voice",
  className = "",
}: {
  count: number;
  live: boolean;
  variant?: WaveVariant;
  className?: string;
}) {
  const shape = WAVE[variant];

  return (
    <div className={`flex w-full items-end justify-between gap-0.5 ${className}`}>
      {Array.from({ length: count }, (_, index) => {
        const peak = shape.peak(index);
        const delay = shape.delay(index);

        return (
          <span
            key={index}
            className={`min-w-0 flex-1 transition-colors duration-400 ${shape.bar} ${live ? "bg-accent/75" : "bg-scene-faint"
              }`}
            style={
              {
                height: `${Math.round(peak * shape.rest)}%`,
                ...(live
                  ? {
                    "--h": `${peak}%`,
                    animation: `bar ${shape.period} ease-in-out ${delay}s infinite`,
                  }
                  : {}),
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export function PlayTriangle({ live = false, faded = false }: { live?: boolean; faded?: boolean }) {
  return (
    <span
      className={`ml-0.75 size-0 border-y-[7px] border-y-transparent border-l-11 transition-[border-left-color,opacity] duration-400 ${live ? "border-l-accent" : "border-l-scene-faint"
        } ${faded ? "opacity-0" : "opacity-100"}`}
    />
  );
}

export function DocIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="text-accent size-3.5 flex-none @min-[640px]:size-4"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

export function Caret() {
  return (
    <span
      className="bg-accent ml-0.5 inline-block h-2.75 w-px align-middle"
      style={{ animation: "blink 1s step-end infinite" }}
    />
  );
}
