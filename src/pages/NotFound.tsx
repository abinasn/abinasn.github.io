import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="max-w-content mx-auto flex w-full flex-1 flex-col items-start justify-center px-5 py-24 md:px-14">
      <p className="text-dim font-mono text-[12px]">404</p>
      <h1 className="mt-3 text-[30px] leading-[1.1] font-extrabold tracking-[-1px] text-balance md:text-[36px] md:tracking-[-1.4px] lg:text-[42px] lg:tracking-[-1.8px]">
        This page could not be found.
      </h1>
      <Link
        to="/"
        className="text-ink-muted hover:text-ink focus-visible:outline-accent mt-8 font-mono text-[12px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        ← Home
      </Link>
    </main>
  );
}
