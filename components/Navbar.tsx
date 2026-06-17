import Link from "next/link";
import AuthButtons from "@/components/AuthButtons";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/#movies" },
  { label: "Films", href: "/#movies" },
  { label: "New & Popular", href: "/#movies" },
  { label: "My List", href: "/profile" },
];

export default async function Navbar() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-normal text-red-600 sm:text-3xl"
            aria-label="Netflix inspired home"
          >
            NETFLIX
          </Link>
          <div className="hidden items-center gap-5 text-sm font-medium text-zinc-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <AuthButtons isSignedIn={Boolean(user)} />
      </nav>
    </header>
  );
}
