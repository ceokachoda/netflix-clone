"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthButtonsProps = {
  isSignedIn: boolean;
  nextPath?: string;
};

export default function AuthButtons({ isSignedIn, nextPath = "/profile" }: AuthButtonsProps) {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  if (!isSignedIn) {
    return (
      <Link
        href={`/login?next=${encodeURIComponent(nextPath)}`}
        className="rounded-sm border border-white/25 px-3 py-1 text-sm font-medium text-white transition hover:border-white sm:block"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/profile"
        className="rounded-sm border border-white/25 px-3 py-1 text-sm font-medium text-white transition hover:border-white"
      >
        Profile
      </Link>
      <button
        className="rounded-sm bg-red-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-red-700"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}
