const tones = {
  paper: "bg-paper",
  card: "bg-card",
  dark: "bg-panel-deep text-panel-fg",
} as const;

export function SectionShell({
  id,
  tone = "paper",
  labelledBy,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-line border-t ${tones[tone]}`}
    >
      <div className="mx-auto w-full max-w-content px-5 py-14 md:px-14 md:py-20">
        {children}
      </div>
    </section>
  );
}
