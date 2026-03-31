import { useEffect, useState } from "react"
import { ThemeContext } from "@/hooks/useTheme"
import type { Theme, ThemeProviderProps } from "./themeProvider.type"



const THEME_KEY = "theme"

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem(THEME_KEY)
        return stored === "dark" ? "dark" : "light"
    })

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)

        localStorage.setItem(THEME_KEY, theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
