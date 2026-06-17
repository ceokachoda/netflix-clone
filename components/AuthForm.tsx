"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/";
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const result =
      mode === "signIn"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
            },
          });

    setLoading(false);

    if (result.error) {
      setMessage(result.error.message);
      return;
    }

    if (mode === "signUp") {
      setMessage("Check your email to finish creating your account.");
      return;
    }

    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md rounded border border-white/10 bg-black/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">
        Account Access
      </p>
      <h1 className="mt-2 text-3xl font-black text-white">
        {mode === "signIn" ? "Sign In" : "Create Account"}
      </h1>
      <p className="mt-2 text-sm text-zinc-400">
        Use your Supabase-authenticated email and password to continue.
      </p>

      <div className="mt-6 flex rounded-sm bg-white/5 p-1 text-sm font-semibold">
        <button
          className={`flex-1 rounded-sm px-3 py-2 ${mode === "signIn" ? "bg-white text-black" : "text-zinc-300"}`}
          onClick={() => setMode("signIn")}
          type="button"
        >
          Sign In
        </button>
        <button
          className={`flex-1 rounded-sm px-3 py-2 ${mode === "signUp" ? "bg-white text-black" : "text-zinc-300"}`}
          onClick={() => setMode("signUp")}
          type="button"
        >
          Sign Up
        </button>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
            placeholder="••••••••"
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
          {loading ? "Working..." : mode === "signIn" ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
