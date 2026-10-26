import { Link } from "react-router";
import { Fragment } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { skillSection } from "@/lib/site";
import { buildSteps } from "@/lib/skills";

const TOKEN = /`([^`]+)`/;

function tokenise(line: string) {
  return line.split(TOKEN).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-accent font-mono text-[0.92em]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
export function HowIBuild() {
  return (
    <SectionShell id="skill" tone="paper" labelledBy="skill-heading">
      <div className="border-line bg-card rounded-[22px] border p-7 md:p-12">
        <Reveal>
          <Eyebrow tone="muted">{skillSection.eyebrow}</Eyebrow>
          <h2
            id="skill-heading"
            className="mt-3 text-[19px] font-semibold tracking-[-0.4px] md:text-[22px]"
          >
            {skillSection.lead}
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <dl className="mt-8 grid gap-x-7 gap-y-1.5 md:mt-10 md:grid-cols-[max-content_1fr] md:gap-y-5">
            {buildSteps.map((step) => (
              <Fragment key={step.label}>
                <dt className="text-ink-muted mt-5 self-baseline font-mono text-[10.5px] leading-[1.6] tracking-[1.2px] uppercase first:mt-0 md:mt-0 md:text-right md:text-[11px]">
                  {step.label}
                </dt>
                <dd className="max-w-[68ch] self-baseline text-[15px] leading-[1.6] md:text-[16.5px]">
                  {tokenise(step.line)}
                </dd>
              </Fragment>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={180}>
          <div className="border-line mt-9 border-t pt-6 md:mt-11">
            <p className="text-ink-soft text-[14px] md:text-[15px]">
              {skillSection.note} —{" "}
              <Link
                to={skillSection.cta.href}
                className="text-accent decoration-accent/40 hover:decoration-accent underline underline-offset-4"
              >
                {skillSection.cta.label} →
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
