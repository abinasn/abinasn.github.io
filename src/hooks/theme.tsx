import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';

export type ThemeType = 'system' | 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const defaultState: ThemeContextType = {
  theme: (localStorage.getItem('theme') as ThemeType) || 'system',
  setTheme: () => {} 
};

const ThemeContext = createContext<ThemeContextType>(defaultState);
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultState.theme);

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

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
