import type { SceneProps } from "./WorkAnimation";

export function ScenePlaceholder({ active }: SceneProps) {
  return (
    <div className="border-scene-line bg-scene-sunken relative h-full overflow-hidden rounded-lg border">
      {active && (
        <span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, transparent 20%, color-mix(in oklab, var(--color-accent) 14%, transparent) 50%, transparent 80%)",
            animation: "sweep 1.9s linear infinite",
          }}
        />
      )}

      <div className="relative flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="bg-accent size-1.5 rounded-full" style={{ animation: "pulse 2.4s ease-in-out infinite" }} />
        <span className="text-scene-faint font-mono text-[10px] tracking-[0.6px] uppercase @min-[440px]:text-[11px]">
          animation
        </span>
      </div>
    </div>
  );
}
