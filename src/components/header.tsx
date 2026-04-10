import { BsSun, BsMoon, BsDisplay } from 'react-icons/bs'
import { useTheme } from '../context/theme'

type Theme = 'light' | 'dark' | 'system'

const navLinks = [
	{ label: 'Home', sectionId: null },
	{ label: 'Work', sectionId: 'work' },
	{ label: 'Skills', sectionId: 'skills' }
]

const themeOptions: { value: Theme; icon: React.ReactNode; title: string }[] = [
	{ value: 'light', icon: <BsSun size={13} />, title: 'Light' },
	{ value: 'dark', icon: <BsMoon size={13} />, title: 'Dark' },
	{ value: 'system', icon: <BsDisplay size={13} />, title: 'System' },
]

function scrollTo(sectionId: string | null) {
	if (!sectionId) {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		return
	}
	const el = document.getElementById(sectionId)
	if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
	const { theme, setTheme } = useTheme()

	return (
		<header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800">
			<div className="max-w-5xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">

				<button
					onClick={() => scrollTo(null)}
					className="text-md font-medium text-zinc-900 dark:text-zinc-100 tracking-tight cursor-pointer"
				>
					abinasp<span className="text-teal-600">_</span>
				</button>

				<div className="flex items-center gap-4 md:gap-8">

					<nav className="hidden sm:flex items-center gap-6">
						{navLinks.map(({ label, sectionId }) => (
							<button
								key={label}
								onClick={() => scrollTo(sectionId)}
								className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 cursor-pointer"
							>
								{label}
							</button>
						))}
					</nav>

					<div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
						{themeOptions.map(({ value, icon, title }) => (
							<button
								key={value}
								onClick={() => setTheme(value)}
								title={title}
								className={`w-7 h-7 flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer ${theme === value
									? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
									: 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
									}`}
							>
								{icon}
							</button>
						))}
					</div>

				</div>
			</div>
		</header>
	)
}