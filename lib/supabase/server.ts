import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

type SupabaseServerLike = {
  auth: {
    getUser: () => Promise<{ data: { user: null } }>;
    exchangeCodeForSession: (_code: string) => Promise<void>;
  };
};

function createFallbackServerClient(): SupabaseServerLike {
  return {
    auth: {
      async getUser() {
        return { data: { user: null } };
      },
      async exchangeCodeForSession() {},
    },
  };
}

export async function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return createFallbackServerClient();
  }

  const cookieStore = await cookies();

  return createServerClient(
    url,
    anonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Components can read cookies but may not set them.
          }
        },
      },
    },
  );
}
