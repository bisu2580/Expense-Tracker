import React, { useState, useEffect } from "react";
import { Button } from "./button";
import {
  Moon,
  Sun,
  Menu,
  X,
  Wallet,
  ArrowRight,
  ArrowRightCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Dashboard", "Transactions", "Expenses", "Reports"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md transition-all duration-300">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_var(--color-primary)/30%] transition-transform duration-300 group-hover:scale-110">
            <Wallet className="h-5.5 w-5.5 stroke-[2.25]" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors">
            Expense
            <span className="text-primary font-extrabold ml-1">Tracker</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1.5 bg-zinc-100/60 dark:bg-zinc-900/60 p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
          {navItems.map((item) => {
            const isActive = activeItem === item;
            return (
              <li key={item}>
                <button
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_2px_10px_var(--color-primary)/25%] font-bold scale-[1.02]"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
                  )}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Custom Theme Switcher */}
          <ThemeToggle />

          <div className="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          <Link href="/login" passHref>
            <Button
              variant="ghost"
              size="lg"
              className="font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary cursor-pointer"
              onClick={() => {}}
            >
              Login
            </Button>
          </Link>

          <Link href="/register" passHref>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] shadow-[0_4px_14px_var(--color-primary)/30%] active:scale-[0.98] font-bold transition-all duration-300 rounded-lg group/btn cursor-pointer px-4 gap-1"
            >
              Sign Up
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Custom Theme Switcher (Mobile) */}
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-primary cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950",
          isMobileMenuOpen
            ? "max-h-[300px] opacity-100 py-4"
            : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col gap-4 px-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              return (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActiveItem(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer",
                      isActive
                        ? "bg-primary/15 text-primary border-l-4 border-primary pl-3"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900",
                    )}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-[1px] bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/login" passHref className="w-full">
              <Button
                variant="outline"
                className="w-full justify-center font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link href="/register" passHref className="w-full">
              <Button className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-md cursor-pointer">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
