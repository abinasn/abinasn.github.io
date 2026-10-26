import { valueToEstree } from "estree-util-value-to-estree";
import { rehypeHubHeadings } from "./rehypeHubHeadings";
import { rehypeInlineProblems } from "./rehypeInlineProblems";
import { createSlugger, type TocItem } from "./toc";

export interface NoteOutline {
  toc: TocItem[];
  placedProblems: boolean;
}

interface RootNode {
  type: string;
  children: { type: string; [key: string]: unknown }[];
}

export function rehypeNoteOutline() {
  return (tree: RootNode) => {
    const outline: NoteOutline = { toc: [], placedProblems: false };

    rehypeInlineProblems({
      mark: () => {
        outline.placedProblems = true;
      },
    })()(tree);

    rehypeHubHeadings({
      slug: createSlugger(),
      collect: (item) => outline.toc.push(item),
    })()(tree);

    tree.children.push({
      type: "mdxjsEsm",
      value: "",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExportNamedDeclaration",
              specifiers: [],
              source: null,
              declaration: {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "outline" },
                    init: valueToEstree(outline),
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
}
