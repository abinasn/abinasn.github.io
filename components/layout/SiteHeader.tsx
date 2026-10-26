import { SectionLink } from "@/components/ui/SectionLink";
import { headerCta, nav } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { Wordmark } from "./Wordmark";


export function SiteHeader() {
  return (
    <header
      className="border-line bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ height: "var(--header-h)" }}
    >
      <div className="relative mx-auto flex h-full w-full max-w-content items-center justify-between px-5 md:px-14">
        <Wordmark />

        <nav className="hidden items-center gap-5.5 text-[13.5px] md:flex">
          {nav.map(({ label, href }) => (
            <SectionLink
              key={label}
              href={href}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              {label}
            </SectionLink>
          ))}

          <SectionLink
            href={headerCta.href}
            className="border-line hover:border-ink rounded-full border px-4.5 py-2 transition-colors"
          >
            {headerCta.label}
          </SectionLink>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
