import Link from "next/link";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="rounded border border-white/10 bg-black/50 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">
            Profile
          </p>
          <h1 className="mt-2 text-3xl font-black text-white">Welcome back</h1>
          <p className="mt-3 text-zinc-300">{email}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-sm bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
