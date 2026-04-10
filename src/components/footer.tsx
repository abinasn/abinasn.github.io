import { SiGithub, SiLeetcode } from 'react-icons/si'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const socials = [
	{ key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abinaspatra/', icon: <FaLinkedin size={15} /> },
	{ key: 'github', label: 'GitHub', href: 'https://github.com/abinasn', icon: <SiGithub size={15} /> },
	{ key: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/abinasp/', icon: <SiLeetcode size={15} /> },
	{ key: 'twitter', label: 'Twitter', href: 'https://x.com/abinaspatra1', icon: <FaXTwitter size={15} /> },
]

export default function Footer() {
	return (
		<footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
			<div className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
				<p className="text-xs text-zinc-400 dark:text-zinc-600">
					© {new Date().getFullYear()} Abinas Patra
				</p>
				<div className="flex items-center gap-2">
					{socials.map(({ key, label, href, icon }) => (
						<a
							key={key}
							href={href}
							target="_blank"
							rel="noreferrer"
							title={label}
							className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200"
						>
							{icon}
						</a>
					))}
				</div>

			</div>
		</footer>
	)
}