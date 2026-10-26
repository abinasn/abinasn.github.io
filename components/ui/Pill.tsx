export function Pill({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`bg-chip text-ink-soft rounded-full font-mono ${size === "sm" ? "px-2.5 py-1 text-[10.5px]" : "px-3 py-1 text-[11px]"
        }`}
    >
      {children}
    </span>
  );
}
