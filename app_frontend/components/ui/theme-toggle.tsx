import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
  }, []);
    const toggleTheme = () => {
      const root = window.document.documentElement;
      if (theme === "light") {
        root.classList.add("dark");
        setTheme("dark");
      } else {
        root.classList.remove("dark");
        setTheme("light");
      }
    };
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="Toggle dark mode"
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-6.5 w-6.5 transform rounded-full bg-white dark:bg-zinc-950 shadow-md transition duration-300 ease-in-out flex items-center justify-center absolute top-[2px]",
          theme === "dark"
            ? "translate-x-6 left-[1px]"
            : "translate-x-0 left-[2px]",
        )}
      >
        {theme === "dark" ? (
          <Moon className="h-3.5 w-3.5 text-primary fill-primary" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-primary fill-primary" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle