import { Fragment } from "react";
import { hero } from "@/lib/site";

const STAGGER = 55;

export function AnimatedHeadline({ className = "" }: { className?: string }) {
  const { before, accent, after } = hero.headline;

  const words = [
    ...before.split(" ").map((text) => ({ text, isAccent: false })),
    { text: accent, isAccent: true },
    ...after.split(" ").map((text) => ({ text, isAccent: false })),
  ];

  return (
    <h1 className={className}>
      {words.map(({ text, isAccent }, i) => (
        <Fragment key={`${text}-${i}`}>
          <span
            className={
              isAccent ? "text-accent inline-block italic" : "inline-block"
            }
            style={{
              animation: `fade .6s cubic-bezier(.2,.7,.2,1) ${i * STAGGER}ms both`,
            }}
          >
            {text}
          </span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}
