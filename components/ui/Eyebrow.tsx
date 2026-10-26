const tones = {
  accent: "text-accent",
  soft: "text-accent-soft",
  muted: "text-ink-muted",
} as const;

export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <div
      className={`font-mono text-[11.5px] tracking-[1.4px] uppercase ${tones[tone]}`}
    >
      {children}
    </div>
  );
}
