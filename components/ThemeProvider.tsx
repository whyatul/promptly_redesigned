"use client"

import { createContext, useContext, useEffect } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  forcedTheme?: Theme
  attribute?: string
  enableSystem?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  forcedTheme,
  attribute = "class",
  enableSystem = false,
  ...props
}: ThemeProviderProps) {
  // Always use dark theme
  const theme = forcedTheme || defaultTheme

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }, [])

  const value = {
    theme: "dark" as Theme,
    setTheme: () => null, // No-op since we're forcing dark theme
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
