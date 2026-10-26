export function Stat({
  value,
  label,
  size = "md",
}: {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
}) {
  const valueSize = {
    sm: "text-[15px]",
    md: "text-[17px]",
    lg: "text-[26px] tracking-[-0.6px]",
  }[size];

  return (
    <div>
      <div className={`font-bold ${valueSize}`}>{value}</div>
      <div className="text-ink-muted mt-1 font-mono text-[11.5px]">{label}</div>
    </div>
  );
}
