import Link from "next/link";
import type { Movie } from "@/data/movies";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

type MovieRowProps = {
  title: string;
  movies: Movie[];
};

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="space-y-4">
      <h2 className="px-4 text-xl font-bold text-white sm:px-6 sm:text-2xl lg:px-8">
        {title}
      </h2>
      <div className="movie-scroll flex gap-3 overflow-x-auto px-4 pb-5 pt-1 sm:gap-4 sm:px-6 lg:px-8">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${slugify(movie.title)}`}
            className="group relative h-56 w-36 flex-none overflow-hidden rounded bg-zinc-900 shadow-xl shadow-black/30 transition duration-300 hover:z-10 hover:scale-105 sm:h-72 sm:w-48"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:brightness-110"
              style={{ backgroundImage: `url(${movie.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3 opacity-100 sm:translate-y-3 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <h3 className="line-clamp-2 text-sm font-bold text-white">
                {movie.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-zinc-300">
                {movie.year} | {movie.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
