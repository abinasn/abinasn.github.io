const GRID = "22px";

export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-line-dash) 1px, transparent 1px)",
          backgroundSize: `${GRID} ${GRID}`,
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, #000 25%, transparent 78%)",
        }}
      />

      <Glow className="top-[-18%] left-[-14%] size-[min(70vw,44rem)]" animation="drift-a 34s ease-in-out infinite" />
      <Glow className="right-[-16%] bottom-[-22%] size-[min(75vw,48rem)]" animation="drift-b 42s ease-in-out infinite" />
    </div>
  );
}

function Glow({
  className,
  animation,
}: {
  className: string;
  animation: string;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--color-accent) var(--glow-strength), transparent) 0%, transparent 68%)",
        animation,
        willChange: "transform",
      }}
    />
  );
}
