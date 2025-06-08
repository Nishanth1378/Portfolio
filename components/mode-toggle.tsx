"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle between dark and light mode
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#00ff00]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" aria-label="Toggle theme">
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-[#00ff00]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#00ff00]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
