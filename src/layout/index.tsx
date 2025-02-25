import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <div className="fixed h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-64 relative -z-10">
        <div className="min-h-screen text-slate-700 dark:text-slate-300 dark:bg-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
}