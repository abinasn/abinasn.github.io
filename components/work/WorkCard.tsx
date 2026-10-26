import { Link } from "react-router";
import type { WorkEntry } from "@/lib/work";
import { WorkAnimation } from "./WorkAnimation";

const variants = {
  feature: {
    shell:
      "border-line bg-card hover:border-accent/45 rounded-2xl border p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] md:p-5",
    headline: "text-[19px] leading-[1.3] md:text-[26px] md:leading-[1.25]",
  },
  compact: {
    shell: "rounded-2xl py-1 transition-colors duration-300",
    headline: "text-[17px] leading-[1.32] md:text-[20px] md:leading-[1.3]",
  },
} as const;

export function WorkCard({ entry }: { entry: WorkEntry }) {
  const variant = variants[entry.variant];

  return (
    <article className={`group relative ${variant.shell}`}>
      {entry.variant === "feature" && (
        <div className="mb-5">
          <WorkAnimation
            slug={entry.slug}
            product={entry.product}
            subject={entry.sceneSubject}
          />
        </div>
      )}

      <p className="text-ink-muted font-mono text-[11px] md:text-[12.5px]">
        {entry.companyUrl ? (
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent relative z-10 transition-colors"
          >
            {entry.company}
          </a>
        ) : (
          entry.company
        )}
        <span className="px-2">·</span>
        {entry.role}
        <span className="px-2">·</span>
        <time dateTime={entry.startDate}>{entry.period}</time>
      </p>

      <h3
        className={`group-hover:text-accent mt-2.5 font-medium tracking-[-0.02em] transition-colors ${variant.headline}`}
      >
        {entry.headline}
      </h3>

      <p className="text-ink-soft mt-3 text-[13.5px] leading-[1.6] md:mt-3.5 md:text-[15px]">
        <span className="text-ink font-semibold">{entry.product}</span> —{" "}
        {entry.summary}
      </p>

      {entry.metrics.length > 0 && (
        <p className="text-ink mt-3 text-[13px] leading-[1.6] md:text-[14px]">
          {entry.metrics.map((metric, i) => (
            <span key={metric}>
              {i > 0 && <span className="text-dim px-2">·</span>}
              {metric}
            </span>
          ))}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 md:mt-5">
        <p className="text-dim font-mono text-[10.5px] md:text-[12px]">
          {entry.stack.map((tech, i) => (
            <span key={tech}>
              {i > 0 && <span className="px-1.5">·</span>}
              {tech}
            </span>
          ))}
        </p>

        <Link
          to={`/work/${entry.slug}`}
          className="text-accent focus-visible:ring-accent/60 rounded-sm text-[13.5px] font-medium after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none md:text-[15px]"
        >
          Read more
          <span
            aria-hidden
            className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
          <span className="sr-only"> about {entry.product}</span>
        </Link>
      </div>
    </article>
  );
}
