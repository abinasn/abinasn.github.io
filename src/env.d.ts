declare module "virtual:hub-posts" {
  import type { Post } from "@/lib/content";
  const posts: Post[];
  export default posts;
}

declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  import type { NoteOutline } from "@/lib/rehypeNoteOutline";
  export const outline: NoteOutline;
  export default function MDXContent(props: MDXProps): React.JSX.Element;
}
