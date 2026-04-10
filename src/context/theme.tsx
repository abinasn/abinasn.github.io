import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(
        () => (localStorage.getItem('theme') as Theme) ?? 'system'
    )

    useEffect(() => {
        const root = document.documentElement

        const applyTheme = (t: Theme) => {
            if (t === 'dark') {
                root.classList.add('dark')
            } else if (t === 'light') {
                root.classList.remove('dark')
            } else {
                // system
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                prefersDark ? root.classList.add('dark') : root.classList.remove('dark')
            }
        }

        applyTheme(theme)
        localStorage.setItem('theme', theme)

        // Listen for system changes when theme is 'system'
        if (theme === 'system') {
            const mq = window.matchMedia('(prefers-color-scheme: dark)')
            const handler = () => applyTheme('system')
            mq.addEventListener('change', handler)
            return () => mq.removeEventListener('change', handler)
        }
    }, [theme])

    const setTheme = (t: Theme) => setThemeState(t)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
    return ctx
}