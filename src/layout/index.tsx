import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row">
        <div className="md:fixed md:w-64 z-10">
          <Sidebar />
        </div>

        <div className="flex-1 md:ml-64">
          <div className="min-h-screen text-slate-700 dark:text-slate-300 dark:bg-[#0a0a0a]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}