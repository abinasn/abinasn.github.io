import { Link } from "react-router";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { skillSection } from "@/lib/site";
import { skillGroups, type SkillGroup } from "@/lib/skills";
import { findWorkEntry, type WorkEntry } from "@/lib/work";

export function Skills() {
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

        <div className="mt-8 grid gap-x-12 gap-y-9 md:mt-10 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={60 * index}>
              <Group group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="border-line mt-10 border-t pt-6 md:mt-12">
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

function Group({ group }: { group: SkillGroup }) {
  return (
    <section aria-label={group.label}>
      <h3 className="text-ink-muted font-mono text-[10.5px] tracking-[1.2px] uppercase md:text-[11px]">
        {group.label}
      </h3>

      <ul className="mt-3">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="border-line-soft flex flex-col gap-1.5 border-t py-3 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="text-ink text-[15px] font-semibold sm:w-44 sm:flex-none">
              {skill.name}
            </span>
            <span className="flex flex-wrap gap-1.5">
              {skill.usedIn
                .map(findWorkEntry)
                .filter((entry): entry is WorkEntry => entry !== undefined)
                .map((entry) => (
                  <ProductLink key={entry.slug} entry={entry} />
                ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductLink({ entry }: { entry: WorkEntry }) {
  return (
    <Link
      to={`/work/${entry.slug}`}
      className="border-line text-ink-soft hover:border-accent hover:text-accent focus-visible:outline-accent rounded-full border px-2.5 py-0.5 text-[12.5px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {entry.shortName ?? entry.product}
    </Link>
  );
}
