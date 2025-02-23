import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  LightBulbIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/outline';
import ProfileImage from "../assets/images/me.jpeg"
import Theme from "./theme";

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: HomeIcon, label: "Home" },
    { path: "/about", icon: UserIcon, label: "About" },
    { path: "/skill", icon: LightBulbIcon, label: "Skills" },
    { path: "/work", icon: BriefcaseIcon, label: "Work" },
    { path: "/resume", icon: CodeBracketSquareIcon, label: "Resume" },
    { path: "/contact", icon: EnvelopeIcon, label: "Contact" },
  ];

  return (
    <nav className="w-64 h-full p-4 dark:text-white dark:bg-black dark:border-r-stone-800 bg-white border-r-slate-100 text-slate-800 border-r-1 flex flex-col">
      <div className="mb-8 mt-8">
        <div className="w-50 h-50 rounded-full mx-auto mb-4">
          <img src={ProfileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>

      <ul className="space-y-7 mx-auto w-50 pl-2 flex-grow">
        {navItems.map(({ path, icon: Icon, label }) => (
          <li key={path} className="mb-2">
            <Link
              to={path}
              className={`flex items-center gap-2 transition-colors px-3 py-2 rounded-md
                ${location.pathname === path 
                  ? 'dark:bg-stone-800 dark:text-white bg-slate-200 text-slate-900 font-medium' 
                  : 'dark:hover:bg-stone-800 dark:hover:text-stone-400 hover:bg-slate-200 hover:text-slate-500'
                }`}
            >
              <Icon className="size-5" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
			<Theme />
    </nav>
  );
}