import type { Plugin } from "vite";
import { CONTENT_DIR, getAllPosts } from "../lib/content";

const VIRTUAL_ID = "virtual:hub-posts";
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

export function hubContent(): Plugin {
  let includeDrafts = false;

  return {
    name: "hub-content",

    configResolved(config) {
      includeDrafts = config.command === "serve";
    },

    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined;
    },

    load(id) {
      if (id !== RESOLVED_ID) return;
      return `export default ${JSON.stringify(getAllPosts({ includeDrafts }))};`;
    },

    configureServer(server) {
      server.watcher.add(CONTENT_DIR);

      const refresh = (file: string) => {
        if (!file.startsWith(CONTENT_DIR) || !file.endsWith(".mdx")) return;
        const module = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", refresh);
      server.watcher.on("change", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}
