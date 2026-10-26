import { ButtonLink } from "@/components/ui/ButtonLink";
import { hero } from "@/lib/site";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { HeroBackdrop } from "./HeroBackdrop";
import { ScrollCue } from "./ScrollCue";

const avatarShapes = {
  circle: "rounded-full",
  square: "rounded-[12%]",
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex snap-start flex-col items-center justify-center px-5 pt-6 pb-20 text-center md:px-14 md:pt-12 md:pb-24"
      style={{ minHeight: "var(--screen-h)" }}
    >
      <HeroBackdrop />

      <div className="mx-auto flex w-full max-w-content flex-col items-center">
        <div
          className={`border-accent relative size-(--hero-avatar) overflow-hidden border-2 ${avatarShapes[hero.avatar.shape]}`}
        >
          <img
            src={hero.avatar.src}
            alt={hero.avatar.alt}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-top"
            style={{ transform: `scale(${hero.avatar.zoom})` }}
          />
        </div>

        <h2 className="text-ink-soft mt-3.5 font-mono text-[11.5px] md:text-xl">
          {hero.name}
        </h2>

        <AnimatedHeadline className="mt-5 max-w-[21ch] text-[22px] leading-[1.28] font-medium tracking-[-0.02em] md:text-[34px] md:leading-[1.22]" />

        <p className="text-ink-soft mt-4 max-w-[46ch] text-[13.5px] leading-[1.6] md:mt-5 md:text-[15px] md:leading-[1.65]">
          {hero.subhead}
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 md:mt-8 md:flex-row md:gap-4.5">
          <ButtonLink href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </ButtonLink>

          <a
            href={hero.secondaryCta.href}
            download
            className="text-ink-soft hover:border-ink hover:text-ink border-line-dash border-b pb-0.5 text-sm transition-colors"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <p className="text-dim mt-8 hidden font-mono text-[11.5px] min-[380px]:block md:mt-10">
          {hero.stats.map((stat, i) => (
            <span key={stat} className="inline-block">
              {i > 0 && <span className="px-2.5">·</span>}
              {stat}
            </span>
          ))}
        </p>
      </div>

      <ScrollCue />
    </section>
  );
}
