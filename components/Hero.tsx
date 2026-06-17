type HeroProps = {
  movie: {
    title: string;
    description: string;
    year: string;
    rating: string;
    duration: string;
    genres: string[];
    backdrop: string;
  };
};

export default function Hero({ movie }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-[620px] overflow-hidden bg-black pt-16 sm:min-h-[700px]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 70%), linear-gradient(0deg, #050505 0%, rgba(5,5,5,0) 28%), url(${movie.backdrop})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-500">
            Featured Movie
          </p>
          <h1 className="text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
            {movie.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-zinc-200">
            <span>{movie.year}</span>
            <span className="rounded-sm border border-zinc-400 px-2 py-0.5">
              {movie.rating}
            </span>
            <span>{movie.duration}</span>
            <span>{movie.genres.join(" / ")}</span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">
            {movie.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-sm bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200">
              Play
            </button>
            <button className="rounded-sm bg-zinc-700/80 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-600">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
