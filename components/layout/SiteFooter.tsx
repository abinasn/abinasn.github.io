import { SocialLinks } from "@/components/layout/SocialLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-line mt-auto border-t">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 md:px-14">
        <p className="text-dim font-mono text-[11.5px]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="ml-auto flex items-center gap-2">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
