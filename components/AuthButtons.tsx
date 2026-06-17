"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { LogOut, UserRound } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={`/login?next=${encodeURIComponent(nextPath)}`}
          className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:border-white sm:block"
        >
          <UserRound className="h-4 w-4" />
          Sign In
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:border-white"
        >
          <UserRound className="h-4 w-4" />
          Profile
        </Link>
      </motion.div>
      <motion.button
        className="inline-flex items-center gap-2 rounded-sm bg-red-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-700"
        onClick={handleSignOut}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </motion.button>
    </div>
  );
}
