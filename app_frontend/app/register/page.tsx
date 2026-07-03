"use client";

import React from "react";
import SignupForm from "@/components/ui/signup-form";
import ThemeToggle from "@/components/ui/theme-toggle";
import { 
  Wallet, 
  TrendingUp, 
  PiggyBank, 
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  TrendingDown
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Floating Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="hidden lg:flex flex-1 relative items-center justify-center bg-zinc-900 dark:bg-zinc-950 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -mr-40 -mt-40 z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-accent/20 blur-3xl -ml-40 -mb-40 z-0" />

        {/* Gradients overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(9,9,11,0.95))] z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 dark:opacity-20 z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-lg px-8 flex flex-col gap-10 py-6">
          {/* Main Title & Details */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary w-fit">
              <ShieldCheck className="h-3.5 w-3.5" />
              Automated Savings targets
            </div>
            <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Start saving smarter <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-yellow-300 bg-clip-text text-transparent">
                from day one.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm xl:text-base leading-relaxed">
              Connect accounts, set dynamic budgets, and view high-fidelity
              reports instantly. Built for people who care about visual
              financial control.
            </p>
          </div>

          {/* Interactive Card Previews (Stacking) */}
          <div className="relative flex flex-col gap-4">
            {/* Card 1: Budget Allocation Showcase */}
            <div className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xxs font-semibold text-zinc-500 uppercase tracking-wider">
                    Dynamic Categorization
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Budget Allocations
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex flex-col gap-3.5">
                {[
                  {
                    name: "Rent & Housing",
                    value: "$1,800",
                    percent: "40%",
                    color: "bg-primary",
                  },
                  {
                    name: "Food & Groceries",
                    value: "$675",
                    percent: "15%",
                    color: "bg-emerald-500",
                  },
                  {
                    name: "Shopping & Leisure",
                    value: "$450",
                    percent: "10%",
                    color: "bg-purple-500",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-zinc-300">{item.name}</span>
                      <span className="text-zinc-400">
                        {item.value} ({item.percent})
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: item.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Savings Goal widget */}
            <div className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <PiggyBank className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        Savings Target Goal
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        Travel & Vacation Fund
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    +85% achieved
                  </span>
                </div>
                <div className="w-full h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-semibold">
                  <span>Current: $8,500</span>
                  <span>Goal Target: $10,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-6 md:px-10 lg:px-20 xl:px-24 bg-white dark:bg-zinc-950 lg:max-w-2xl xl:max-w-3xl z-10 shadow-[20px_0_40px_rgba(0,0,0,0.01)] border-r border-zinc-200/50 dark:border-zinc-900/50">
        <div className="mx-auto w-full max-w-md flex flex-col gap-6">
          {/* Logo / Branding */}
          <Link href="/" className="flex items-center gap-2.5 group w-fit">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-[0_0_15px_var(--color-primary)/30%] transition-transform duration-300 group-hover:scale-105">
              <Wallet className="h-5 w-5 stroke-[2.2]" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Expense
              <span className="text-primary font-extrabold ml-0.5">
                Tracker
              </span>
            </h1>
          </Link>

          {/* Page Headers */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Create your account
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Join us to track expenditures and plan budget goals.
            </p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3.5">
            <Button
              onClick={() => {}}
              className="flex items-center justify-center gap-2.5 h-11 px-4 rounded-xl border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/60 font-semibold text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer transition-all duration-200"
            >
              {/* Google SVG */}
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.67 0 3.16.57 4.34 1.7l3.25-3.25C17.62 1.63 14.99 1 12 1 7.35 1 3.39 3.67 1.41 7.56l3.85 2.99c.9-2.7 3.42-4.51 6.74-4.51z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-1.99 3.43-4.92 3.43-8.54z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.26 14.24a7.18 7.18 0 0 1 0-4.48L1.41 6.77a11.96 11.96 0 0 0 0 10.45l3.85-2.98z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.1-4.26 1.1-3.32 0-5.84-1.81-6.74-4.51L1.41 16.8C3.39 20.33 7.35 23 12 23z"
                />
              </svg>
              Google
            </Button>
            <Button
              onClick={() => {}}
              className="flex items-center justify-center gap-2.5 h-11 px-4 rounded-xl border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/60 font-semibold text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer transition-all duration-200"
            >
              {/* GitHub SVG */}
              <svg
                className="h-4.5 w-4.5 fill-current text-zinc-800 dark:text-zinc-200"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          {/* Signup Form */}
          <SignupForm />

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-zinc-400 dark:text-zinc-500 mt-1">
            <span>© 2026 ExpenseTracker Inc.</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;