"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Mail, Lock, User, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast.success("Successfully registered account!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Name Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
        >
          Full Name
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
            <User className="h-4 w-4" />
          </span>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="pl-9 h-11 rounded-xl bg-zinc-50 border-zinc-200/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all dark:bg-zinc-900/50 dark:border-zinc-800"
            required
          />
        </div>
      </div>

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
        <label
          htmlFor="password"
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
        >
          Password
        </label>
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

      {/* Confirm Password Input */}
      <div className="space-y-1.5">
        <label
          htmlFor="confirmPassword"
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
        >
          Confirm Password
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
            <Lock className="h-4 w-4" />
          </span>
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            className="pl-9 pr-10 h-11 rounded-xl bg-zinc-50 border-zinc-200/80 focus-visible:ring-primary/20 focus-visible:border-primary transition-all dark:bg-zinc-900/50 dark:border-zinc-800"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-pointer"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
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
            Creating Account...
          </>
        ) : (
          <>
            Get Started
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {/* Sign In Redirect */}
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 pt-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
