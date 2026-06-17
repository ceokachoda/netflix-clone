"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import AuthButtons from "@/components/AuthButtons";

type NavbarClientProps = {
  isSignedIn: boolean;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/#movies" },
  { label: "Films", href: "/#movies" },
  { label: "New & Popular", href: "/#movies" },
  { label: "My List", href: "/profile" },
];

export default function NavbarClient({ isSignedIn }: NavbarClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="shrink-0 text-2xl font-black uppercase tracking-normal text-red-600 sm:text-3xl"
              aria-label="Netflix inspired home"
            >
              NETFLIX
            </Link>
            <div className="hidden items-center gap-4 text-sm font-medium text-zinc-300 md:flex lg:gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex items-center gap-1 rounded-sm border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10 md:hidden"
            >
              <Menu className="h-4 w-4" />
              Menu
            </button>
            <div className="hidden items-center gap-2 text-xs font-semibold text-zinc-300 sm:flex">
              <span className="hidden lg:inline">Browse</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <AuthButtons isSignedIn={isSignedIn} />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.aside
              id="mobile-nav"
              className="absolute right-0 top-0 h-full w-[85vw] max-w-sm border-l border-white/10 bg-[#090909] p-5 shadow-2xl shadow-black/40"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black uppercase tracking-normal text-red-600">
                  NETFLIX
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  Account
                </p>
                <div className="mt-4">
                  <AuthButtons isSignedIn={isSignedIn} />
                </div>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
