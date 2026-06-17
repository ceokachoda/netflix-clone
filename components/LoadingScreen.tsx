export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 pt-24 text-white sm:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="h-72 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black animate-pulse" />
        <div className="space-y-4">
          <div className="h-5 w-40 rounded bg-white/10 animate-pulse" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-64 rounded-xl bg-white/8 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
