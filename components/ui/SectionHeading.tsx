import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  aside,
  tone = "accent",
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
  tone?: "accent" | "soft";
  id?: string;
}) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-baseline">
      <div>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-2.5 text-[28px] font-bold tracking-[-1.2px] md:text-[36px]"
        >
          {title}
        </h2>
        {description && (
          <p className="text-ink-soft mt-3.5 max-w-[52ch] text-[14px] leading-[1.65] md:text-[15px]">
            {description}
          </p>
        )}
      </div>
      {aside}
    </div>
  );
}
