const links = [
  "Audio Description",
  "Help Center",
  "Gift Cards",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Terms of Use",
  "Privacy",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-sm text-zinc-500 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-base font-semibold text-zinc-300 sm:text-lg">Questions? Call 000-800-919-1694</p>
        <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {links.map((link) => (
            <a key={link} href="#" className="transition hover:text-zinc-200">
              {link}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-zinc-600 sm:text-sm">
          Netflix-inspired demo built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.
        </p>
      </div>
    </footer>
  );
}
