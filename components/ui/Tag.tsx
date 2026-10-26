export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line text-ink-soft rounded-full border px-2.5 py-1 font-mono text-[11px]">
      {children}
    </span>
  );
}
