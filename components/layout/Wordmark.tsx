import { SectionLink } from "@/components/ui/SectionLink";
import { wordmark } from "@/lib/site";

export function Wordmark({ size = 15 }: { size?: number }) {
  return (
    <SectionLink
      href="/#top"
      aria-label={`${wordmark} — home`}
      className="text-ink font-mono"
      style={{ fontSize: size }}
    >
      {wordmark}
    </SectionLink>
  );
}
