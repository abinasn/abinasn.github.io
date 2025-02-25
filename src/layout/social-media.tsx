import { SiLinkedin, SiGithub, SiLeetcode,  } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6"

const socialIcons = [
  {
    key: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abinaspatra/",
    icon: <SiLinkedin />
  },
  {
    key: "github",
    name: "GitHub",
    link: "https://github.com/abinasn",
    icon: <SiGithub />
  },
  {
    key: "leetcode",
    name: "LeetCode",
    link: "https://leetcode.com/u/abinasp/",
    icon: <SiLeetcode />
  },
  {
    key: "twitter",
    name: "Twitter",
    link: "https://x.com/abinaspatra1",
    icon: <FaXTwitter />
  },
]

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {socialIcons.map(ico => (
        <a target="_blank" href={ico.link} key={ico.key} className="w-8 h-8 border-1 cursor-pointer hover:bg-slate-300 dark:hover:bg-stone-600 rounded-4xl flex items-center justify-center dark:bg-stone-800 dark:border-gray-800 bg-gray-200 border-gray-200">
          {ico.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;