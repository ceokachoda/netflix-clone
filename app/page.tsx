import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import Navbar from "@/components/Navbar";
import { featuredMovie, movieRows } from "@/data/movies";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero movie={featuredMovie} />
        <div id="movies" className="mx-auto -mt-12 max-w-7xl space-y-8 pb-12">
          {movieRows.map((row) => (
            <MovieRow key={row.id} title={row.title} movies={row.movies} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
