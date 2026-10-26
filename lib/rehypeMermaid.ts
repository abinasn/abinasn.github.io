interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const MERMAID_TAG = "mermaid-diagram";

function isMermaidCode(node: HastNode): boolean {
  if (node.type !== "element" || node.tagName !== "code") return false;
  const className = node.properties?.className;
  return Array.isArray(className) && className.includes("language-mermaid");
}

function nodeText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(nodeText).join("");
}

export function rehypeMermaid() {
  return (tree: HastNode) => {
    const walk = (node: HastNode) => {
      const children = node.children;
      if (!children) return;

      for (const [index, child] of children.entries()) {
        if (child.type === "element" && child.tagName === "pre") {
          const code = (child.children ?? []).find(isMermaidCode);
          if (code) {
            children[index] = {
              type: "element",
              tagName: MERMAID_TAG,
              properties: { chart: nodeText(code).trim() },
              children: [],
            };
            continue;
          }
        }

        walk(child);
      }
    };

    walk(tree);
  };
}
