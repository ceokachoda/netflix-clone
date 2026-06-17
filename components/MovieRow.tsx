import Link from "next/link";
import type { Movie } from "@/data/movies";

const posterTones = [
  "from-red-950 via-black to-zinc-900",
  "from-zinc-950 via-red-950 to-black",
  "from-orange-950 via-black to-zinc-900",
  "from-emerald-950 via-black to-zinc-900",
  "from-slate-950 via-black to-zinc-900",
  "from-rose-950 via-black to-zinc-900",
];

type MovieRowProps = {
  title: string;
  movies: Movie[];
};

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-red-500">
            Collection
          </p>
          <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
            {title}
          </h2>
        </div>
        <p className="hidden text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:block">
          Scroll to browse
        </p>
      </div>
      <div className="movie-scroll flex gap-3 overflow-x-auto px-4 pb-5 pt-1 sm:gap-4 sm:px-6 lg:px-8">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.slug}`}
            className="group relative h-56 w-36 flex-none overflow-hidden rounded border border-white/5 bg-zinc-900 shadow-xl shadow-black/30 transition duration-300 hover:z-10 hover:scale-105 sm:h-72 sm:w-48"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${posterTones[movie.id % posterTones.length]}`}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/25 text-xl font-black text-white/80 backdrop-blur-sm">
                {movie.title.charAt(0)}
              </div>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
              style={{ backgroundImage: `url(${movie.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute left-3 top-3 rounded-sm border border-white/15 bg-black/45 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              {movie.year}
            </div>
            <div className="absolute inset-0 flex items-end p-3">
              <div className="max-w-full">
                <h3 className="line-clamp-2 text-lg font-black leading-tight text-white drop-shadow">
                  {movie.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-zinc-200">
                  {movie.year} | {movie.rating}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  Tap for details
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3 opacity-100 sm:translate-y-3 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
                Open details
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
