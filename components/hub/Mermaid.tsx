import { Maximize2, X } from "lucide-react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);
  const renderId = `mermaid-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;

    async function draw(host: HTMLElement) {
      const token = readTokens(host);
      const fontFamily = getComputedStyle(host).fontFamily;
      const [{ default: mermaid }] = await Promise.all([
        import("mermaid"),
        document.fonts.ready,
      ]);
      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        fontFamily,
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
        htmlLabels: false,
        flowchart: {
          padding: 16,
          nodeSpacing: 40,
          rankSpacing: 46,
          useMaxWidth: true,
          htmlLabels: false,
        },
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
      className="bg-panel-deep dark:border-panel-line my-4.5 overflow-x-auto rounded-xl border border-transparent"
    >
      {svg ? (
        <>
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            className="group/diagram focus-visible:outline-accent relative block w-full cursor-zoom-in px-4.5 pt-11 pb-5 focus-visible:outline-2 focus-visible:-outline-offset-2"
          >
            <span className="sr-only">Enlarge diagram</span>
            <span
              aria-hidden
              className="text-panel-muted group-hover/diagram:text-panel-fg border-panel-line bg-panel-node absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] transition-colors"
            >
              <Maximize2 size={11} />
              Enlarge
            </span>
            <div
              className="flex min-w-fit justify-center [&_svg]:h-auto [&_svg]:max-w-full"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </button>

          <dialog
            ref={dialogRef}
            aria-label="Diagram"
            onClick={(event) => {
              if (event.target === event.currentTarget) dialogRef.current?.close();
            }}
            className="bg-panel-deep border-panel-line m-auto max-h-[92vh] w-[min(96vw,90rem)] max-w-none overflow-auto rounded-xl border p-0 backdrop:bg-black/75"
          >
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="text-panel-muted hover:text-panel-fg border-panel-line bg-panel-node focus-visible:outline-accent sticky top-3 left-full z-10 mr-3 inline-flex size-8 items-center justify-center rounded-full border focus-visible:outline-2"
            >
              <X size={15} aria-hidden />
              <span className="sr-only">Close diagram</span>
            </button>
            <div
              className="px-6 pb-8 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:!max-w-none [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </dialog>
        </>
      ) : (
        <div className="text-panel-muted h-24 animate-pulse font-mono text-[11px]">
          <span className="sr-only">Rendering diagram</span>
        </div>
      )}
    </figure>
  );
}
