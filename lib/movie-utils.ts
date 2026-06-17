import { movieRows, featuredMovie, type Movie } from "@/data/movies";

export function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function findMovieBySlug(slug: string): Movie | null {
  const allMovies = movieRows.flatMap((row) => row.movies);
  return allMovies.find((movie) => slugify(movie.title) === slug) ?? null;
}

export function getSimilarMovies(currentTitle: string, count = 6) {
  return movieRows
    .flatMap((row) => row.movies)
    .filter((movie) => movie.title !== currentTitle)
    .slice(0, count);
}

export function getFeaturedBackdrop() {
  return featuredMovie.backdrop;
}
