"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast.success("Successfully logged in!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Email Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
        >
          Email Address
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
            <Mail className="h-4 w-4" />
          </span>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="pl-9 h-11 rounded-xl bg-zinc-50 border-zinc-200/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all dark:bg-zinc-900/50 dark:border-zinc-800"
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
          >
            Password
          </label>
          <a
            href="#"
            className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Forgot Password?
          </a>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
            <Lock className="h-4 w-4" />
          </span>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="pl-9 pr-10 h-11 rounded-xl bg-zinc-50 border-zinc-200/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all dark:bg-zinc-900/50 dark:border-zinc-800"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center gap-2 pt-1">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 rounded border-zinc-300 text-primary focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-pointer"
        />
        <label
          htmlFor="remember"
          className="text-sm text-zinc-600 dark:text-zinc-400 select-none cursor-pointer"
        >
          Keep me logged in for 30 days
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        size="lg"
        className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_4px_14px_var(--color-primary)/25%] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          <>
            Sign In
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {/* Sign Up Redirect */}
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 pt-2">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Sign up for free
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
