"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggler() {
  const { setTheme, theme } = useTheme()

  const themeOptions = ["light", "dark"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'} transition-all dark:-rotate-90 dark:scale-0`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'} transition-all dark:rotate-0 dark:scale-100`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => {
          if (option !== theme) {
            return (
              <DropdownMenuItem key={option} onClick={() => setTheme(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </DropdownMenuItem>
            )
          }
          return null
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
