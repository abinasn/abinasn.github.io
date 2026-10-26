import path from "path";
import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import { rehypeMermaid } from "./lib/rehypeMermaid";
import { rehypeNoteOutline } from "./lib/rehypeNoteOutline";
import { hubContent } from "./plugins/hubContent";

const SHIKI_OPTIONS = {
  theme: "github-dark-default",
  fallbackLanguage: "text",
} as const;

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkGfm],
        rehypePlugins: [
          rehypeMermaid,
          [rehypeShiki, SHIKI_OPTIONS],
          rehypeNoteOutline,
        ],
      }),
    },
    react({ include: /\.(mdx|tsx|ts)$/ }),
    tailwindcss(),
    hubContent(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname) },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
