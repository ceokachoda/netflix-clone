"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
  }

  return (
    <motion.button
      type="button"
      onClick={handleSignOut}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </motion.button>
  );
}
