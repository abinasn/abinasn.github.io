import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { workSection } from "@/lib/site";
import { work } from "@/lib/work";
import { WorkTimelineItem } from "./WorkTimelineItem";

export function WorkTimeline() {
  return (
    <SectionShell id="work" tone="paper" labelledBy="work-heading">
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow={workSection.eyebrow}
          title={workSection.title}
          description={workSection.intro}
          aside={
            <ButtonLink href={workSection.cta.href} variant="outline" download>
              {workSection.cta.label}
            </ButtonLink>
          }
        />
      </Reveal>

      <ol>
        {work.map((entry, index) => (
          <WorkTimelineItem
            key={entry.slug}
            entry={entry}
            index={index}
            isLast={index === work.length - 1}
          />
        ))}
      </ol>
    </SectionShell>
  );
}
