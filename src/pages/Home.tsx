import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skill/Skills";
import { WorkTimeline } from "@/components/work/WorkTimeline";

export function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WorkTimeline />
      <Skills />
      <Contact />
    </main>
  );
}
