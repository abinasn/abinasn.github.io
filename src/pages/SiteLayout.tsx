import { Outlet } from "react-router";
import { HashScrollRestore } from "@/components/layout/HashScrollRestore";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteLayout() {
  return (
    <>
      <HashScrollRestore />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
