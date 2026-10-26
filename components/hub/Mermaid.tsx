import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "@/components/theme/useTheme";

const TOKENS = [
  "--color-panel-deep",
  "--color-panel-node",
  "--color-panel-stroke",
  "--color-panel-line",
  "--color-panel-text",
  "--color-panel-muted",
  "--color-panel-fg",
  "--color-accent",
  "--color-accent-soft",
  "--font-sans",
  "--font-mono",
] as const;

type Token = (typeof TOKENS)[number];

function readTokens(element: HTMLElement): Record<Token, string> {
  const styles = getComputedStyle(element);
  const read = (token: Token) => styles.getPropertyValue(token).trim();
  return Object.fromEntries(TOKENS.map((token) => [token, read(token)])) as Record<
    Token,
    string
  >;
}

export function Mermaid({ chart }: { chart: string }) {
  const { resolved } = useTheme();
  const hostRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);
  const renderId = `mermaid-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;

    async function draw(host: HTMLElement) {
      const token = readTokens(host);
      const { default: mermaid } = await import("mermaid");
      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        fontFamily: token["--font-sans"],
        themeVariables: {
          background: token["--color-panel-deep"],
          primaryColor: token["--color-panel-node"],
          primaryTextColor: token["--color-panel-fg"],
          primaryBorderColor: token["--color-panel-stroke"],
          secondaryColor: token["--color-panel-line"],
          tertiaryColor: token["--color-panel-deep"],
          mainBkg: token["--color-panel-node"],
          nodeBorder: token["--color-panel-stroke"],
          nodeTextColor: token["--color-panel-fg"],
          lineColor: token["--color-panel-muted"],
          textColor: token["--color-panel-text"],
          clusterBkg: token["--color-panel-deep"],
          clusterBorder: token["--color-panel-line"],
          titleColor: token["--color-accent-soft"],
          edgeLabelBackground: token["--color-panel-deep"],
          labelBoxBkgColor: token["--color-panel-node"],
          labelBoxBorderColor: token["--color-panel-stroke"],
          labelTextColor: token["--color-panel-fg"],
          fontSize: "13px",
        },
        flowchart: { padding: 16, nodeSpacing: 40, rankSpacing: 46, useMaxWidth: true },
        sequence: { useMaxWidth: true },
        gantt: { useMaxWidth: true },
      });

      try {
        const rendered = await mermaid.render(renderId, chart);
        if (!cancelled) setSvg(rendered.svg);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    void draw(host);

    return () => {
      cancelled = true;
    };
  }, [chart, resolved, renderId]);

  if (failed) {
    return (
      <pre className="bg-panel-deep text-panel-text dark:border-panel-line my-4.5 overflow-x-auto rounded-xl border border-transparent px-4.5 py-4 font-mono text-[12px] leading-[1.8]">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <figure
      ref={hostRef}
      className="bg-panel-deep dark:border-panel-line my-4.5 overflow-x-auto rounded-xl border border-transparent px-4.5 py-5"
    >
      {svg ? (
        <div
          className="flex min-w-fit justify-center [&_svg]:h-auto [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="text-panel-muted h-24 animate-pulse font-mono text-[11px]">
          <span className="sr-only">Rendering diagram</span>
        </div>
      )}
    </figure>
  );
}
