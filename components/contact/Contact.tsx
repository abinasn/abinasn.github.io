import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { contactSection } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <SectionShell id="contact" tone="paper" labelledBy="contact-heading">
      <div className="border-line bg-card rounded-[22px] border p-7 md:p-12">
        <Reveal>
          <Eyebrow tone="muted">{contactSection.eyebrow}</Eyebrow>
          <h2
            id="contact-heading"
            className="mt-3 text-[26px] font-bold tracking-[-1px] md:text-[30px]"
          >
            {contactSection.title}
          </h2>
          <p className="text-ink-soft mt-3.5 max-w-[46ch] text-[15px] leading-[1.65] md:text-[16px]">
            {contactSection.intro}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <ContactForm />
        </Reveal>
      </div>
    </SectionShell>
  );
}
