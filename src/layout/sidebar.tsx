import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserIcon,
  LightBulbIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  CodeBracketSquareIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import ProfileImage from "../assets/images/me.jpeg"
import ThemeSelector from "./theme-selector";
import SocialMedia from "./social-media";
import Button from "../components/button";

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false)


  const navItems = [
    { path: "/", icon: UserIcon, label: "About" },
    { path: "/skill", icon: LightBulbIcon, label: "Skills" },
    { path: "/work", icon: BriefcaseIcon, label: "Work" },
    { path: "/resume", icon: CodeBracketSquareIcon, label: "Resume" },
    { path: "/contact", icon: EnvelopeIcon, label: "Contact" },
  ];
  return (
    <div className="w-screen h-screen">
      <Button
        className="md:hidden absolute z-10 top-4 right-4"
        onClick={() => setOpen(!open)}
        variant="primary"
      >
        {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
      </Button>
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <nav
        className={`w-64 h-full p-4 dark:text-slate-300 dark:bg-black dark:border-r-stone-800 bg-white border-r-slate-100 text-slate-700 border-r-1 flex flex-col
           transform transition-transform duration-300 ease-in-out fixed z-50
          ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <div className="mb-6 mt-8">
          <div className="w-50 h-50 rounded-full mx-auto mb-4">
            <img src={ProfileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <p className="text-2xl text-center">Abinas Patra</p>
          <SocialMedia />
        </div>

        <ul className="space-y-7 mx-auto w-50 pl-2 flex-grow">
          {navItems.map(({ path, icon: Icon, label }) => (
            <li key={path} className="mb-2">
              <Link
                to={path}
                className={`flex items-center gap-2 transition-colors px-3 py-2 rounded-md 
                ${location.pathname === path
                    ? 'dark:bg-stone-800 dark:text-slate-300 bg-slate-200 text-slate-700'
                    : 'dark:hover:bg-stone-800 dark:hover:text-stone-400 hover:bg-slate-200 hover:text-slate-700'
                  }`}
              >
                <Icon className="size-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSelector />
      </nav>
    </div>
  );
}