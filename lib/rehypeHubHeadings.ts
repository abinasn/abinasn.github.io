import type { TocItem } from "./toc";

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

function nodeText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  if (node.type === "comment") return "";
  return (node.children ?? []).map(nodeText).join("");
}

export function rehypeHubHeadings({
  slug,
  collect,
}: {
  slug: (text: string) => string;
  collect: (item: TocItem) => void;
}) {
  return () => (tree: HastNode) => {
    const walk = (node: HastNode) => {
      if (
        node.type === "element" &&
        (node.tagName === "h1" || node.tagName === "h2")
      ) {
        const text = nodeText(node).trim();

        if (text) {
          const properties = (node.properties ??= {});

          const existing = properties.id;
          const id =
            typeof existing === "string" && existing ? existing : slug(text);

          properties.id = id;
          collect({ id, text, depth: node.tagName === "h1" ? 1 : 2 });
        }
      }

      for (const child of node.children ?? []) walk(child);
    };

    walk(tree);
  };
}
