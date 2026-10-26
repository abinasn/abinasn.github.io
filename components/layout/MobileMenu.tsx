import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SectionLink } from "@/components/ui/SectionLink";
import { headerCta, nav } from "@/lib/site";


export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="text-ink-soft hover:text-ink -mr-2 flex h-9 w-9 items-center justify-center transition-colors md:hidden"
      >
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="border-line bg-paper absolute inset-x-0 top-full border-b md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-content flex-col px-5 py-2">
            {nav.map(({ label, href }) => (
              <SectionLink
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-ink-soft hover:text-ink border-line-soft border-b py-3 text-sm transition-colors last:border-b-0"
              >
                {label}
              </SectionLink>
            ))}

            <div className="py-4">
              <SectionLink
                href={headerCta.href}
                onClick={() => setOpen(false)}
                className="border-line hover:border-ink inline-block rounded-full border px-4.5 py-2 text-sm transition-colors"
              >
                {headerCta.label}
              </SectionLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
