import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme, ThemeType } from '../hooks/theme';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const themes: { name: string; value: ThemeType; icon: React.ElementType }[] = [
    {
      name: 'Light',
      value: 'light',
      icon: SunIcon
    },
    {
      name: 'System',
      value: 'system',
      icon: ComputerDesktopIcon
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: MoonIcon
    }
  ];

  return (
    <div className="bg-white dark:bg-black dark:border-stone-800 rounded-md p-1 border-slate-200 border-1 gap-1 flex justify-around w-40 mx-auto">
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer
            ${theme === value
              ? 'dark:bg-stone-800 dark:text-slate-300 bg-slate-200 text-slate-700' 
                  : 'dark:hover:bg-stone-800 dark:hover:text-stone-400 hover:bg-slate-200 hover:text-slate-700'
            }
          `}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}