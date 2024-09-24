"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import React from "react"

import { Icons } from "@/components/icons"
import { Tooltip } from "@/components/ui/tooltip"

const themes = [
  {
    label: "Light Mode",
    value: "light",
    icon: Icons.Sun,
  },
  {
    label: "Dark Mode",
    value: "dark",
    icon: Icons.Moon,
  },
]

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()
  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? Icons.Lightning,
    [theme]
  )

  React.useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label="Change theme"
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <div className="absolute inset-0 transition group-hover:bg-zinc-100/10 dark:group-hover:bg-zinc-800/10" />
            <ThemeIcon className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </button>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  className="z-50 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-md dark:bg-zinc-800 dark:text-zinc-100"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {themes.find((t) => t.value === theme)?.label}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}