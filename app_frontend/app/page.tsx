"use client"
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { testDbConnection } from "@/lib/mongodb";
import { Toaster, toast } from "sonner";
import { 
  TrendingUp, 
  PiggyBank, 
  CreditCard, 
  ArrowUpRight, 
  Database, 
  Plus, 
  DollarSign, 
  ArrowRight,
  Percent
} from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const [dbStatus, setDbStatus] = useState<"idle" | "connecting" | "success" | "error">("idle");

  const handleConnect = async () => {
    setDbStatus("connecting");
    const promise = testDbConnection();
    
    toast.promise(promise, {
      loading: "Establishing connection to MongoDB Atlas...",
      success: (data) => {
        if (data.success) {
          setDbStatus("success");
          return data.message;
        } else {
          setDbStatus("error");
          throw new Error(data.error);
        }
      },
      error: (err) => {
        setDbStatus("error");
        return `Connection failed: ${err.message}`;
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <Toaster position="top-center" richColors />

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-6 text-left max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 dark:bg-primary/5 text-primary border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Introducing ExpenseTracker v1.0
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
            Take Control of Your Money. <br />
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/60 bg-clip-text text-transparent">
              Save Smarter.
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A beautiful, intuitive expense tracker built to help you monitor cash flow, create budget goals, and view visual spending breakdowns in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-5 rounded-xl shadow-[0_4px_20px_var(--color-primary)/30%] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              onClick={handleConnect}
              disabled={dbStatus === "connecting"}
              className="border-zinc-200 dark:border-zinc-800 font-semibold px-6 py-5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 active:scale-95"
            >
              <Database className={`h-4 w-4 ${dbStatus === "connecting" ? "animate-spin text-primary" : "text-zinc-500"}`} />
              {dbStatus === "idle" && "Test DB Connection"}
              {dbStatus === "connecting" && "Connecting..."}
              {dbStatus === "success" && "Connected Successfully"}
              {dbStatus === "error" && "Retry Connection"}
            </Button>
          </div>

          {/* Quick Metrics Footer */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full mt-4">
            <div>
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">99.9%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Uptime Sync</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">256-bit</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">AES Security</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">0ms</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Real-time Feed</p>
            </div>
          </div>
        </div>

        {/* Interactive Showcase Preview */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          {/* Background Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-primary/50 opacity-20 dark:opacity-10 blur-2xl -z-10" />

          {/* Main Visual Box */}
          <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-6 md:p-8 flex flex-col gap-6">
            
            {/* Header of Box */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Current balance</p>
                <p className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mt-0.5">$14,285.50</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Income */}
              <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900/50 flex flex-col gap-1.5 transition-transform hover:scale-[1.01]">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs bg-emerald-500/10 dark:bg-emerald-500/5 px-2 py-0.5 rounded-full w-max">
                  <TrendingUp className="h-3 w-3" />
                  +12.4%
                </div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">$8,450.00</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Monthly Income</p>
              </div>

              {/* Savings */}
              <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900/50 flex flex-col gap-1.5 transition-transform hover:scale-[1.01]">
                <div className="flex items-center gap-2 text-primary font-semibold text-xs bg-primary/10 dark:bg-primary/5 px-2 py-0.5 rounded-full w-max">
                  <PiggyBank className="h-3 w-3" />
                  Goal: $5k
                </div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">$3,200.00</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Total Savings</p>
              </div>
            </div>

            {/* Visual Budget Progress Bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-zinc-500 dark:text-zinc-400">Monthly Budget Usage</span>
                <span className="text-primary font-bold">64% spent ($2,880 of $4,500)</span>
              </div>
              <div className="w-full h-3.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden p-0.5 border border-zinc-200/50 dark:border-zinc-800/30">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 shadow-[0_0_8px_var(--color-primary)/30%]"
                  style={{ width: "64%" }}
                />
              </div>
            </div>

            {/* Mini Transaction List */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Recent Transactions</p>
                <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-0.5">
                  View All
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
              
              <div className="flex flex-col gap-2.5">
                {[
                  { title: "Apple Subscription", desc: "iCloud Storage Plan", cost: "-$9.99", date: "Today, 10:14 AM", color: "bg-zinc-100 dark:bg-zinc-800" },
                  { title: "Target Grocery Store", desc: "Food & Household items", cost: "-$148.50", date: "Yesterday, 4:32 PM", color: "bg-primary/10 dark:bg-primary/5 text-primary" },
                  { title: "Upwork Global Inc.", desc: "Freelance Payment", cost: "+$750.00", date: "June 11, 2:15 PM", color: "bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 rounded-xl transition-all duration-200 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${item.color.includes("text-") ? item.color.split(" ")[0] : item.color}`}>
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</p>
                        <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${item.cost.startsWith("+") ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-900 dark:text-zinc-50"}`}>{item.cost}</p>
                      <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-0.5">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
