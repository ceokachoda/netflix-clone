import { movieRows, type Movie } from "@/data/movies";

export function findMovieBySlug(slug: string): Movie | null {
  const allMovies = movieRows.flatMap((row) => row.movies);
  return allMovies.find((movie) => movie.slug === slug) ?? null;
}

export function getSimilarMovies(currentTitle: string, count = 6) {
  return movieRows
    .flatMap((row) => row.movies)
    .filter((movie) => movie.title !== currentTitle)
    .slice(0, count);
}
