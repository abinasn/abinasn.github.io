import { Mermaid } from "./Mermaid";
import { Point, Points } from "./Points";

function HeadingAnchor({ id }: { id: string }) {
  return (
    <a
      href={`#${id}`}
      className="text-placeholder hover:text-accent focus-visible:outline-accent ml-2 align-middle text-[0.62em] font-normal opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span aria-hidden>#</span>
      <span className="sr-only">Permalink to this section</span>
    </a>
  );
}

const H2_CLASS =
  "group mt-10.5 mb-3.25 scroll-mt-5 text-[19px] font-bold tracking-[-0.7px] md:text-[21px] lg:text-[22px]";

export const hubMdxComponents = {
  table: (props: React.ComponentProps<"table">) => (
    <div className="my-5.5 -mx-1 overflow-x-auto px-1">
      <table
        className="w-full border-collapse text-left text-[14px] leading-[1.65] md:text-[15px]"
        {...props}
      />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-line border-b" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th
      className="text-ink px-3 py-2.5 align-bottom font-bold first:pl-0 last:pr-0"
      {...props}
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      className="border-line/55 text-ink-soft border-b px-3 py-2.5 align-top first:pl-0 last:pr-0"
      {...props}
    />
  ),
  h1: ({ id, children, ...props }: React.ComponentProps<"h2">) => (
    <h2 id={id} className={H2_CLASS} {...props}>
      {children}
      {id && <HeadingAnchor id={id} />}
    </h2>
  ),
  h2: ({ id, children, ...props }: React.ComponentProps<"h2">) => (
    <h2 id={id} className={`${H2_CLASS} first:mt-0`} {...props}>
      {children}
      {id && <HeadingAnchor id={id} />}
    </h2>
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-8 mb-2.5 text-[16px] font-bold tracking-[-0.4px] md:text-[17px]"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="text-ink-soft mb-4.5 text-[15px] leading-[1.75] text-pretty md:text-[16px]"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="text-ink-soft mb-4.5 list-none space-y-2 text-[15px] leading-[1.7] md:text-[16px]"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="text-ink-soft mb-4.5 list-decimal space-y-2 pl-5 text-[15px] leading-[1.7] md:text-[16px]"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li
      className="before:text-accent relative pl-5 before:absolute before:left-0 before:content-['—'] in-[ol]:pl-0 in-[ol]:before:content-none"
      {...props}
    />
  ),
  a: ({ href = "", children, ...props }: React.ComponentProps<"a">) => {
    const external = href.startsWith("http");

    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="text-accent decoration-accent/40 hover:decoration-accent focus-visible:outline-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
        {...props}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  },
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-ink font-bold" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-accent/40 text-ink-soft my-5 border-l-2 pl-4 text-[15px] leading-[1.7] italic md:text-[16px]"
      {...props}
    />
  ),
  img: ({ alt = "", ...props }: React.ComponentProps<"img">) => (
    <img
      alt={alt}
      loading="lazy"
      decoding="async"
      className="border-line my-5.5 block h-auto w-full rounded-xl border"
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="border-line my-10" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="bg-chip text-ink rounded px-1.5 py-0.5 font-mono text-[0.88em]"
      {...props}
    />
  ),
  pre: ({ children, tabIndex }: React.ComponentProps<"pre">) => (
    <pre
      tabIndex={tabIndex}
      className="bg-panel-deep text-panel-text dark:border-panel-line my-4.5 overflow-x-auto rounded-xl border border-transparent px-4.5 py-4 font-mono text-[12px] leading-[1.8] [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
    >
      {children}
    </pre>
  ),
  "mermaid-diagram": ({ chart }: { chart?: string }) =>
    chart ? <Mermaid chart={chart} /> : null,
  Points,
  Point,
};
