'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import * as SwitchPrimitives from "@radix-ui/react-switch"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  
  // Handle theme detection after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    const darkTheme = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkTheme(darkTheme)
  }, [theme])

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  // Don't render the switch until after hydration to avoid mismatch
  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="h-6 w-11" />
  }

  return (
    <SwitchPrimitives.Root
      checked={isDarkTheme}
      onCheckedChange={toggleTheme}
      suppressHydrationWarning
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        isDarkTheme ? "bg-secondary" : "bg-input"
      )}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          isDarkTheme ? "translate-x-5" : "translate-x-0"
        )}
      >
        {isDarkTheme ? (
          <Moon className="h-3 w-3 text-primary" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
}