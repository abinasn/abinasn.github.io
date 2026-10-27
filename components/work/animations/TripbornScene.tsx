import { useEffect, useState } from "react";
import type { SceneProps } from "../WorkAnimation";
import { Badge, PanelLabel, ProgressBar, SceneRow, StatusPill } from "./primitives";
import { useStagger } from "./sceneMotion";
import { useSceneTimeline } from "./useSceneTimeline";

const BEATS = [
  ["request", 400],
  ["auth", 450],
  ["verified", 650],
  ["rate", 300],
  ["fanout", 500],
  ["call", 700],
  ["sorted", 3960],
  ["best", 750],
  ["foot", 500],
  ["badge", 350],
] as const;

const SPEED = 4.2;

const PROVIDERS: { name: string; ms: number; fail?: boolean }[] = [
  { name: "abhibus", ms: 86 },
  { name: "redbus", ms: 142 },
  { name: "ticketgoose", ms: 210 },
  { name: "travelyaari", ms: 365 },
];

const FARES: Record<string, { price: string; route: string; note: string }> = {
  abhibus: { price: "₹1,240", route: "21:30 → 06:45", note: "AC sleeper · 9h 15m" },
  redbus: { price: "₹1,320", route: "22:00 → 07:30", note: "AC sleeper · 9h 30m" },
  ticketgoose: { price: "₹1,050", route: "20:45 → 06:15", note: "AC seater · 9h 30m" },
  travelyaari: { price: "₹1,180", route: "23:15 → 08:20", note: "AC sleeper · 9h 05m" },
};

const PROVIDERS_WHEN_NARROW = 3;

const SORTED = ["ticketgoose", "travelyaari", "abhibus", "redbus"];
const ARRIVAL = ["abhibus", "redbus", "ticketgoose", "travelyaari"];

export function TripbornScene({ active }: SceneProps) {
  const { at, cycle, still } = useSceneTimeline(BEATS, active, { hold: 2800 });

  const fannedOut = useStagger(PROVIDERS.length, { start: at("fanout"), still, every: 90 });
  const calling = at("call");

  const [answered, setAnswered] = useState<string[]>([]);
  const [timedOut, setTimedOut] = useState<string[]>([]);

  useEffect(() => {
    if (!calling) {
      setAnswered([]);
      setTimedOut([]);
      return;
    }

    if (still) {
      setAnswered(ARRIVAL);
      setTimedOut(PROVIDERS.filter((p) => p.fail).map((p) => p.name));
      return;
    }

    const timers = PROVIDERS.map((provider) =>
      setTimeout(() => {
        if (provider.fail) setTimedOut((names) => [...names, provider.name]);
        else setAnswered((names) => [...names, provider.name]);
      }, provider.ms * SPEED),
    );

    return () => timers.forEach(clearTimeout);
  }, [calling, still]);

  const sorted = at("sorted");

  return (
    <div key={cycle} className="flex h-full flex-col">
      <div className="bg-scene-sunken border-scene-line mb-2 flex items-center gap-3 rounded-[10px] border px-2.5 py-2 @min-[640px]:gap-4 @min-[640px]:px-3.5 @min-[640px]:py-3">
        <div
          className={`hidden flex-none items-center gap-2 transition-[opacity,transform] duration-400 @min-[640px]:flex ${
            at("request") ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-accent size-4 flex-none"
          >
            <path d="M3 12h13" />
            <path d="m12 6 6 6-6 6" />
            <path d="M21 4v16" />
          </svg>
          <div className="min-w-0">
            <div className="text-scene-ink truncate text-[12px]">1 search request</div>
            <div className="text-scene-muted truncate text-[10.5px]">12 Nov · 2 passengers</div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-scene-muted mr-auto truncate font-mono text-[9px] @min-[640px]:text-[10.5px]">
              POST /v1/fares/search
            </span>
            <StatusPill tone={at("verified") ? "ok" : "idle"} shown={at("auth")}>
              {at("verified") ? "JWT verified" : "JWT verifying…"}
            </StatusPill>
            <span className="hidden @min-[440px]:block">
              <StatusPill tone="accent" shown={at("rate")}>
                rate limit 18/60
              </StatusPill>
            </span>
          </div>
          <ProgressBar pct={at("rate") ? 30 : 0} height={2} duration={500} />
        </div>

        <span className="hidden @min-[640px]:block">
          <Badge shown={at("badge")}>search time ↓ 75%</Badge>
        </span>
      </div>

      <div className="flex min-h-0 flex-1 gap-2.5 @min-[440px]:gap-3">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <PanelLabel>Provider fan-out · parallel</PanelLabel>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-1">
            {PROVIDERS.map((provider, index) => {
              const ok = answered.includes(provider.name);
              const failed = timedOut.includes(provider.name);
              const inFlight = calling && !ok && !failed;

              return (
                <SceneRow
                  key={provider.name}
                  shown={fannedOut > index}
                  slide="y"
                  className={`items-center gap-2 rounded-[7px] border px-1.5 py-0.5 @min-[440px]:py-1 @min-[640px]:px-2 @min-[640px]:py-1.5 ${
                    index >= PROVIDERS_WHEN_NARROW ? "hidden @min-[440px]:flex" : "flex"
                  } ${ok || failed || inFlight ? "border-solid" : "border-dashed"} ${
                    failed
                      ? "border-scene-warn/35 bg-scene-warn/5"
                      : ok
                        ? "border-scene-ok/30 bg-scene-ok/5"
                        : inFlight
                          ? "border-accent/55 bg-accent/5"
                          : "border-scene-line"
                  }`}
                >
                  <span className="text-scene-ink w-14.5 flex-none truncate font-mono text-[8.5px] @min-[640px]:w-22 @min-[640px]:text-[10.5px]">
                    {provider.name}
                  </span>
                  <ProgressBar
                    className="flex-1"
                    height={2}
                    tone={failed ? "warn" : "accent"}
                    duration={provider.ms * SPEED}
                    pct={calling ? (provider.fail ? 70 : 100) : 0}
                  />
                  <span
                    className={`w-10.5 flex-none text-right font-mono text-[8px] transition-colors duration-300 @min-[640px]:w-17.5 @min-[640px]:text-[9.5px] ${
                      failed ? "text-scene-warn" : ok ? "text-scene-ok" : "text-scene-faint"
                    }`}
                  >
                    {failed ? "timeout" : ok ? `200 · ${provider.ms}ms` : calling ? "calling…" : "queued"}
                  </span>
                </SceneRow>
              );
            })}
          </div>
        </div>

        <div className="hidden min-h-0 min-w-0 flex-1 flex-col @min-[440px]:flex">
          <PanelLabel>Normalized results · lowest fare first</PanelLabel>
          <div className="relative min-h-0 flex-1 [--slot:38px] @min-[640px]:[--slot:44px]">
            {ARRIVAL.map((name) => {
              const fare = FARES[name];
              const landed = answered.includes(name);
              const rank = sorted ? SORTED.indexOf(name) : answered.indexOf(name);
              const best = sorted && at("best") && SORTED[0] === name;

              return (
                <div
                  key={name}
                  className={`absolute inset-x-0 flex h-8.5 items-center gap-2 rounded-[7px] border px-2 @min-[640px]:h-10 @min-[640px]:px-2.5 ${
                    best ? "border-accent bg-accent/7" : "border-scene-line bg-scene-sunken"
                  } ${landed ? "translate-x-0 opacity-100" : "translate-x-2.5 opacity-0"}`}
                  style={{
                    top: `calc(var(--slot) * ${Math.max(rank, 0)})`,
                    transition:
                      "top 650ms cubic-bezier(.4,0,.2,1), opacity 400ms ease, transform 400ms ease, border-color 400ms ease, background-color 400ms ease",
                  }}
                >
                  <span
                    className={`w-11.5 flex-none text-[11px] font-semibold @min-[640px]:w-15.5 @min-[640px]:text-[14px] ${
                      best ? "text-accent" : "text-scene-ink"
                    }`}
                  >
                    {fare.price}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-scene-ink block truncate text-[9px] @min-[640px]:text-[10.5px]">
                      {fare.route}
                    </span>
                    <span className="text-scene-faint hidden truncate font-mono text-[9.5px] @min-[640px]:block">
                      {name} · {fare.note}
                    </span>
                  </span>
                  <span className="hidden @min-[640px]:block">
                    <StatusPill tone="accent" shown={best}>
                      Lowest fare
                    </StatusPill>
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className={`border-scene-line text-scene-faint mt-2 hidden gap-4 border-t pt-2 font-mono text-[10px] transition-[opacity,transform] duration-400 @min-[640px]:flex ${
              at("foot") ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <span>
              23 fares · <b className="text-accent font-semibold">4</b> providers
            </span>
            <span>
              normalized in <b className="text-accent font-semibold">380 ms</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
