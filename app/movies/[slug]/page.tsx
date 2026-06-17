import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { movieRows } from "@/data/movies";
import { findMovieBySlug, getSimilarMovies, slugify } from "@/lib/movie-utils";

type MoviePageProps = {
  params: {
    slug: string;
  };
};

const trailerMap: Record<string, string> = {
  "the-electric-state": "KpN98z8Kf5E",
  "back-in-action": "BLjvq2B0oGg",
  "carry-on": "aYOW0z43hyQ",
  "rebel-ridge": "gF3gZicntIw",
  damsel: "iM150ZWovZM",
  atlas: "Jokpt_LJpbw",
  "stranger-things": "b9EkMc79ZSU",
  "the-witcher": "ndl1W4ltcmg",
  wednesday: "Di310WS8zLk",
  "the-night-agent": "YDbnY9Obsfs",
  "one-piece": "Ades3pQbeh8",
  "black-mirror": "jDiYGjp5R3o",
  "extraction-2": "Y274jZs5s7s",
  "the-gray-man": "BmllggGO4pM",
  "red-notice": "Pj0wz7zu3Ms",
  "the-old-guard": "aK-X2d0lJ_s",
  "6-underground": "YLE85olJjp8",
  "triple-frontier": "Fo3yRLLrXQA",
  "the-piano-lesson": "2L8F2XKxP6Q",
  maestro: "gJP2QblqLA0",
  "the-trial-of-the-chicago-7": "FVb6EdKDBfU",
  roma: "fp_i7cnOgbQ",
  "marriage-story": "BHi-a1n8t7M",
  "the-two-popes": "T5OhkFY1PQE",
  beef: "AFPIMHBzGDs",
  "the-gentlemen": "wyEOwHrpZH4",
  "glass-onion": "gj5ibYSz8C0",
  "do-revenge": "rK-JQU_bShc",
  "the-chair": "eOqtBtWGl1Q",
  "russian-doll": "YHcKoAMGGvY",
};

export function generateStaticParams() {
  return movieRows.flatMap((row) =>
    row.movies.map((movie) => ({
      slug: slugify(movie.title),
    })),
  );
}

export default function MoviePage({ params }: MoviePageProps) {
  const { slug } = params;
  const movie = findMovieBySlug(slug);

  if (!movie) {
    notFound();
  }

  const similarMovies = getSimilarMovies(movie.title);
  const trailerId = trailerMap[slug] ?? "dQw4w9WgXcQ";
  const runtime = movie.runtime ?? (movie.id % 2 === 0 ? "2h 06m" : "1h 58m");
  const description =
    movie.description ??
    `${movie.title} follows a restless lead through danger, secrets, and one big decision that changes everything. ` +
      "This mock detail page mirrors the Netflix flow with a big hero, trailer action, and related picks.";
  const genres = movie.genres ?? ["Action", "Drama", "Thriller"];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="pt-16">
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.76) 44%, rgba(5,5,5,0.32) 100%), url(${movie.image})`,
            }}
          />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
            <div className="flex items-end">
              <div className="max-w-2xl">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-zinc-300">
                  <span className="text-red-500">Movie Details</span>
                  <span>{movie.year}</span>
                  <span>{movie.rating}</span>
                  <span>{runtime}</span>
                </div>
                <h1 className="text-4xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
                  {movie.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-zinc-200">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`https://www.youtube.com/watch?v=${trailerId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
                  >
                    Play
                  </a>
                  <button className="rounded-sm bg-zinc-700/85 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-600">
                    Watch Later
                  </button>
                  <Link
                    href="/"
                    className="rounded-sm border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </div>

            <aside className="rounded border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:p-5">
              <div className="aspect-video overflow-hidden rounded bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${trailerId}?rel=0`}
                  title={`${movie.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 grid gap-3 text-sm text-zinc-200">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400">Title</span>
                  <span className="font-semibold text-white">{movie.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400">Year</span>
                  <span className="font-semibold text-white">{movie.year}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400">Rating</span>
                  <span className="font-semibold text-white">{movie.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Runtime</span>
                  <span className="font-semibold text-white">{runtime}</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-500">
                Similar Titles
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">More Like This</h2>
            </div>
          </div>
          <div className="movie-scroll flex gap-3 overflow-x-auto pb-2">
            {similarMovies.map((suggestion) => (
              <Link
                key={suggestion.id}
                href={`/movies/${slugify(suggestion.title)}`}
                className="group relative h-56 w-36 flex-none overflow-hidden rounded bg-zinc-900 transition duration-300 hover:z-10 hover:scale-105 sm:h-72 sm:w-48"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:brightness-110"
                  style={{ backgroundImage: `url(${suggestion.image})` }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3">
                  <h3 className="line-clamp-2 text-sm font-bold text-white">
                    {suggestion.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-zinc-300">
                    {suggestion.year} | {suggestion.rating}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
