import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-4 dark:text-white dark:bg-black">
        <Outlet />
      </div>
    </div>
  );
}
