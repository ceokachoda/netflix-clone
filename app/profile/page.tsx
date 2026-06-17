import Link from "next/link";
import { redirect } from "next/navigation";
import { BadgeInfo, ContactRound, Settings2, ShieldCheck, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import SignOutButton from "@/components/SignOutButton";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/profile");
  }

  const email = user.email ?? "Signed-in user";
  const joined = user.created_at ? new Date(user.created_at).toLocaleDateString() : "Active";
  const initials = email.slice(0, 2).toUpperCase();

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-2xl shadow-black/20"
        >
          <div className="bg-[linear-gradient(180deg,rgba(220,38,38,0.18),rgba(0,0,0,0))] px-5 py-6 sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">
              Account
            </p>
            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Your Profile
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
              Manage your account, review your details, and jump to privacy, terms, or contact support.
            </p>
          </div>

          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                    User Avatar
                  </p>
                  <h2 className="truncate text-xl font-bold text-white">{email}</h2>
                  <p className="text-sm text-zinc-400">Member since {joined}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <BadgeInfo className="h-5 w-5 text-red-500" />
                  <p className="mt-3 text-sm font-semibold text-white">Account Info</p>
                  <p className="mt-1 break-all text-sm text-zinc-400">{email}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="h-5 w-5 text-red-500" />
                  <p className="mt-3 text-sm font-semibold text-white">Session Security</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Protected by Supabase session persistence with route-level guards.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-red-500" />
                  <p className="text-sm font-semibold text-white">Account Settings</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5" href="/privacy">
                    Privacy Settings
                  </Link>
                  <Link className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5" href="/terms">
                    Terms & Usage
                  </Link>
                  <Link className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5" href="/contact">
                    Contact Support
                  </Link>
                  <Link className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5" href="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <UserCircle2 className="h-5 w-5 text-red-500" />
                  <p className="text-sm font-semibold text-white">Quick Actions</p>
                </div>
                <div className="mt-4 space-y-3">
                  <Link href="/contact" className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5">
                    <ContactRound className="h-4 w-4 text-red-500" />
                    Contact
                  </Link>
                  <Link href="/privacy" className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5">
                    <ShieldCheck className="h-4 w-4 text-red-500" />
                    Privacy
                  </Link>
                  <Link href="/terms" className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5">
                    <BadgeInfo className="h-4 w-4 text-red-500" />
                    Terms
                  </Link>
                </div>
              </div>

              <SignOutButton />
            </aside>
          </div>
        </motion.section>
      </main>
    </PageShell>
  );
}
