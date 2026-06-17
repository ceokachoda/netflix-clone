"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthCardProps = {
  mode: "login" | "signup";
};

export default function AuthCard({ mode }: AuthCardProps) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="mx-auto max-w-md overflow-hidden rounded border border-white/10 bg-black/60 shadow-2xl shadow-black/30 backdrop-blur-md">
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
          <input
            className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-zinc-300">Password</span>
          <input
            className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            minLength={6}
            required
          />
        </label>

        {message ? (
          <p className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
            {message}
          </p>
        ) : null}

        <button
          className="w-full rounded-sm bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Working..." : mode === "login" ? "Sign In" : "Create Account"}
        </button>

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
    </div>
  );
}
