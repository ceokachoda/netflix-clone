"use client";

import { createBrowserClient } from "@supabase/ssr";

type SupabaseBrowserLike = {
  auth: {
    signInWithPassword: (input: { email: string; password: string }) => Promise<{
      data: null;
      error: Error;
    }>;
    signUp: (input: {
      email: string;
      password: string;
      options?: { emailRedirectTo?: string };
    }) => Promise<{
      data: null;
      error: Error;
    }>;
    signOut: () => Promise<{ error: null }>;
  };
};

function createFallbackBrowserClient(): SupabaseBrowserLike {
  const error = new Error(
    "Supabase environment variables are missing. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  );

  return {
    auth: {
      async signInWithPassword() {
        return { data: null, error };
      },
      async signUp() {
        return { data: null, error };
      },
      async signOut() {
        return { error: null };
      },
    },
  };
}

export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return createFallbackBrowserClient();
  }

  return createBrowserClient(url, anonKey);
}
