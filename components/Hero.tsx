"use client";

import { Play, Info } from "lucide-react";
import { motion } from "framer-motion";

type HeroProps = {
  movie: {
    title: string;
    description: string;
    year: string;
    rating: string;
    duration: string;
    genres: string[];
    backdrop: string;
    trailerId: string;
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
      <div className="mx-auto flex min-h-[560px] max-w-[96rem] items-center px-4 py-16 sm:px-6 lg:px-8 2xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl 2xl:max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-red-500 sm:text-sm">
            Featured Movie
          </p>
          <h1 className="max-w-[12ch] text-4xl font-black leading-[0.9] text-white sm:text-6xl lg:text-8xl 2xl:text-8xl">
            {movie.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-200 sm:gap-3 sm:text-sm">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{movie.year}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              {movie.rating}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{movie.duration}</span>
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-2.5 py-1 sm:inline-flex">{movie.genres.join(" / ")}</span>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-200 sm:text-base sm:leading-7 2xl:max-w-2xl">
            {movie.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={`https://www.youtube.com/watch?v=${movie.trailerId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200 sm:px-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="h-4 w-4 fill-current" />
              Play
            </motion.a>
            <motion.button className="inline-flex items-center gap-2 rounded-sm bg-zinc-700/80 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-600 sm:px-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Info className="h-4 w-4" />
              More Info
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
