"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { ArrowRight, Mail, Lock, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type AuthCardProps = {
  mode: "login" | "signup";
};

export default function AuthCard({ mode }: AuthCardProps) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const result =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/callback?next=/`,
            },
          });

    setLoading(false);

    if (result.error) {
      setMessage(result.error.message);
      return;
    }

    if (mode === "signup") {
      setMessage("Check your email to confirm your account.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl shadow-black/30 backdrop-blur-md"
    >
      <div className="bg-[linear-gradient(180deg,rgba(220,38,38,0.18),rgba(0,0,0,0))] p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">
          Netflix Account
        </p>
        <h1 className="mt-2 text-3xl font-black text-white">
          {mode === "login" ? "Sign In" : "Create Account"}
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          {mode === "login"
            ? "Enter your email and password to continue."
            : "Create your account to start watching."}
        </p>
      </div>

      <form className="space-y-4 px-6 pb-6 sm:px-8 sm:pb-8" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-zinc-300">Email</span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              className="w-full rounded-lg border border-white/10 bg-black py-3.5 pl-10 pr-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-2 flex items-center justify-between text-sm font-medium text-zinc-300">
            <span>Password</span>
            <button
              type="button"
              className="text-xs font-semibold text-zinc-400 transition hover:text-white"
              onClick={() => setShowPassword((current) => !current)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </span>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              className="w-full rounded-lg border border-white/10 bg-black py-3.5 pl-10 pr-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              minLength={6}
              required
            />
          </div>
        </label>

        {message ? (
          <p
            role="status"
            aria-live="polite"
            className={`rounded border px-4 py-3 text-sm ${
              message.toLowerCase().includes("confirm")
                ? "border-red-500/20 bg-red-500/10 text-red-100"
                : "border-white/10 bg-white/5 text-zinc-200"
            }`}
          >
            {message}
          </p>
        ) : null}

        <motion.button
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          <span>{loading ? "Working..." : mode === "login" ? "Sign In" : "Create Account"}</span>
          {!loading ? <ArrowRight className="h-4 w-4" /> : null}
        </motion.button>

        <p className="pt-1 text-center text-sm text-zinc-400">
          {mode === "login" ? "No account yet?" : "Already have an account?"}{" "}
          <Link
            href={mode === "login" ? "/signup" : "/login"}
            className="font-semibold text-white transition hover:text-red-500"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
