import { Outlet } from "react-router";
import { HubShell } from "@/components/hub/HubShell";
import { HashScrollRestore } from "@/components/layout/HashScrollRestore";
import { getHubCounts, getHubTree, lastUpdated } from "@/lib/hub";

export function HubLayout() {
  const tree = getHubTree();

  return (
    <>
      <HashScrollRestore />

      <HubShell
        tree={tree}
        counts={getHubCounts(tree)}
        updated={lastUpdated(tree)}
      >
        <Outlet />
      </HubShell>
    </>
  );
}
