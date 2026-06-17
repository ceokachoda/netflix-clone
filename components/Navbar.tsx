const navItems = ["Home", "Series", "Films", "New & Popular", "My List"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="text-2xl font-black uppercase tracking-normal text-red-600 sm:text-3xl"
            aria-label="Netflix inspired home"
          >
            NETFLIX
          </a>
          <div className="hidden items-center gap-5 text-sm font-medium text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#movies" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-sm border border-white/25 px-3 py-1 text-sm font-medium text-white transition hover:border-white sm:block">
            Sign In
          </button>
          <button className="rounded-sm bg-red-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-red-700">
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
}
