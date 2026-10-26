import { ArrowDown } from "lucide-react";
import { SectionLink } from "@/components/ui/SectionLink";
import { hero } from "@/lib/site";

export function ScrollCue() {
  return (
    <SectionLink
      href={hero.primaryCta.href}
      aria-label="Scroll to work"
      className="border-line text-ink-soft hover:border-accent hover:text-accent absolute bottom-6 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border transition-colors md:bottom-8"
    >
      <span
        aria-hidden
        className="flex"
        style={{ animation: "bob 2.4s ease-in-out infinite" }}
      >
        <ArrowDown size={16} />
      </span>
    </SectionLink>
  );
}
