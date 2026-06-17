import Link from "next/link";
import { mainLinks } from "@/lib/site-links";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-sm text-zinc-500 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg border border-white/5 bg-white/0 px-4 py-3 text-center font-medium transition hover:border-white/15 hover:bg-white/5 hover:text-zinc-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-zinc-600 sm:text-sm">
          Netflix-inspired demo built with Next.js, Tailwind CSS, Supabase, Framer Motion, and Lucide React.
          </p>
          <p className="text-xs text-zinc-500">Contact: karanmalakar55@gmail.com | 6909211150</p>
        </div>
      </div>
    </footer>
  );
}
