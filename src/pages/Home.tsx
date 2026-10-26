import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { HowIBuild } from "@/components/skill/HowIBuild";
import { WorkTimeline } from "@/components/work/WorkTimeline";

export function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WorkTimeline />
      <HowIBuild />
      <Contact />
    </main>
  );
}
