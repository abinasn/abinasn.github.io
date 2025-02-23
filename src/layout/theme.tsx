import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function Theme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    function updateTheme() {
      const html = document.documentElement;
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'system') {
        isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
      } else {
        theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
      }

      localStorage.setItem('theme', theme);
    }

    updateTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const themes = [
    {
      name: 'System',
      value: 'system',
      icon: ComputerDesktopIcon
    },
    {
      name: 'Light',
      value: 'light',
      icon: SunIcon
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: MoonIcon
    }
  ];

  return (
    <div className="bg-white dark:bg-black dark:border-stone-800 rounded-lg p-1 border-gray-400 border-1 gap-1 flex justify-around w-40 mx-auto">
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer
            ${theme === value
              ? 'bg-gray-100 dark:bg-stone-800 text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-stone-800'
            }
          `}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}