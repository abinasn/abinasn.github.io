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
      <span
        aria-hidden
        className="text-accent"
        style={{ animation: "blink 1.1s ease-in-out infinite" }}
      >
        _
      </span>
    </SectionLink>
  );
}
