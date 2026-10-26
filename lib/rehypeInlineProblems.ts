interface JsxAwareNode {
  type: string;
  name?: string;
  children?: JsxAwareNode[];
}

const PROBLEMS_TAG = "Problems";

export function rehypeInlineProblems({ mark }: { mark: () => void }) {
  return () => (tree: JsxAwareNode) => {
    const walk = (node: JsxAwareNode) => {
      if (
        (node.type === "mdxJsxFlowElement" ||
          node.type === "mdxJsxTextElement") &&
        node.name === PROBLEMS_TAG
      ) {
        mark();
        return;
      }

      for (const child of node.children ?? []) walk(child);
    };

    walk(tree);
  };
}
