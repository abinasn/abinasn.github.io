import { Link, useParams } from "react-router";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { findWorkEntry } from "@/lib/work";
import { NotFound } from "./NotFound";

export function WorkCaseStudy() {
  const { slug = "" } = useParams();
  const entry = findWorkEntry(slug);

  if (!entry) return <NotFound />;

  return (
    <main className="mx-auto w-full max-w-content flex-1 px-5 py-14 md:px-14 md:py-20">
      <Link
        to="/#work"
        className="text-ink-muted hover:text-ink font-mono text-[12px] transition-colors"
      >
        ← All work
      </Link>

      <div className="mt-8 max-w-[68ch]">
        <Eyebrow>{entry.product}</Eyebrow>

        <h1 className="mt-3 text-[28px] leading-[1.2] font-bold tracking-[-1.2px] md:text-[38px]">
          {entry.headline}
        </h1>

        <p className="text-ink-muted mt-5 font-mono text-[12px] md:text-[13px]">
          {entry.company}
          <span className="px-2">·</span>
          {entry.role}
          <span className="px-2">·</span>
          <time dateTime={entry.startDate}>{entry.period}</time>
        </p>

        <p className="text-ink-soft mt-7 text-[15px] leading-[1.7] md:text-[17px]">
          {entry.product} — {entry.summary}
        </p>

        <ul className="border-line mt-8 space-y-2 border-t pt-7">
          {entry.metrics.map((metric) => (
            <li key={metric} className="text-[15px] md:text-[16px]">
              <span className="text-accent mr-2.5">—</span>
              {metric}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {entry.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <p className="text-dim border-line mt-12 border-t pt-7 font-mono text-[12px]">
          Full write-up in progress.
        </p>
      </div>
    </main>
  );
}
