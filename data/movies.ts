export type Movie = {
  id: number;
  title: string;
  year: string;
  rating: string;
  image: string;
};

export type MovieRow = {
  id: string;
  title: string;
  movies: Movie[];
};

const imageBase = "https://image.tmdb.org/t/p/w500";

export const featuredMovie = {
  title: "Midnight Signal",
  description:
    "A brilliant cryptographer follows a mysterious broadcast across a city on lockdown and uncovers a conspiracy that could rewrite the future.",
  year: "2026",
  rating: "TV-MA",
  duration: "2h 08m",
  genres: ["Thriller", "Sci-Fi", "Mystery"],
  backdrop:
    "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
};

export const movieRows: MovieRow[] = [
  {
    id: "trending",
    title: "Trending Now",
    movies: [
      { id: 1, title: "The Electric State", year: "2025", rating: "PG-13", image: `${imageBase}/yZ8BS9D1v3S3k6V8wT5NwXQ7Dq.jpg` },
      { id: 2, title: "Back in Action", year: "2025", rating: "PG-13", image: `${imageBase}/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg` },
      { id: 3, title: "Carry-On", year: "2024", rating: "PG-13", image: `${imageBase}/sjMN7DRi4sGiledsmllEw5HJjPy.jpg` },
      { id: 4, title: "Rebel Ridge", year: "2024", rating: "TV-MA", image: `${imageBase}/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg` },
      { id: 5, title: "Damsel", year: "2024", rating: "PG-13", image: `${imageBase}/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg` },
      { id: 6, title: "Atlas", year: "2024", rating: "PG-13", image: `${imageBase}/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg` },
    ],
  },
  {
    id: "originals",
    title: "Netflix Originals",
    movies: [
      { id: 7, title: "Stranger Things", year: "2025", rating: "TV-14", image: `${imageBase}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg` },
      { id: 8, title: "The Witcher", year: "2025", rating: "TV-MA", image: `${imageBase}/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg` },
      { id: 9, title: "Wednesday", year: "2025", rating: "TV-14", image: `${imageBase}/9PFonBhy4cQy7Jz20NpMygczOkv.jpg` },
      { id: 10, title: "The Night Agent", year: "2025", rating: "TV-MA", image: `${imageBase}/6heawK1JrnyG9C2Q90xZMo6F7o7.jpg` },
      { id: 11, title: "One Piece", year: "2025", rating: "TV-14", image: `${imageBase}/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg` },
      { id: 12, title: "Black Mirror", year: "2025", rating: "TV-MA", image: `${imageBase}/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg` },
    ],
  },
  {
    id: "action",
    title: "Pulse-Pounding Action",
    movies: [
      { id: 13, title: "Extraction 2", year: "2023", rating: "R", image: `${imageBase}/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg` },
      { id: 14, title: "The Gray Man", year: "2022", rating: "PG-13", image: `${imageBase}/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg` },
      { id: 15, title: "Red Notice", year: "2021", rating: "PG-13", image: `${imageBase}/lAXONuqg41NwUMuzMiFvicDET9Y.jpg` },
      { id: 16, title: "The Old Guard", year: "2020", rating: "R", image: `${imageBase}/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg` },
      { id: 17, title: "6 Underground", year: "2019", rating: "R", image: `${imageBase}/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg` },
      { id: 18, title: "Triple Frontier", year: "2019", rating: "R", image: `${imageBase}/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg` },
    ],
  },
  {
    id: "drama",
    title: "Award-Worthy Drama",
    movies: [
      { id: 19, title: "The Piano Lesson", year: "2024", rating: "PG-13", image: `${imageBase}/h4e9Q8Lq1aQK2tJ1QfMAvWrWbJ0.jpg` },
      { id: 20, title: "Maestro", year: "2023", rating: "R", image: `${imageBase}/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg` },
      { id: 21, title: "The Trial of the Chicago 7", year: "2020", rating: "R", image: `${imageBase}/ahf5cVdooMAlDRiJOZQNuLqa1Is.jpg` },
      { id: 22, title: "Roma", year: "2018", rating: "R", image: `${imageBase}/dtIIyQyALk57ko5bjac7hi01YQ.jpg` },
      { id: 23, title: "Marriage Story", year: "2019", rating: "R", image: `${imageBase}/pZekG6xabTmZxjmYw10wN84Hp8d.jpg` },
      { id: 24, title: "The Two Popes", year: "2019", rating: "PG-13", image: `${imageBase}/4d4mTSfDIFIbUbMLUfaKodvxYXA.jpg` },
    ],
  },
  {
    id: "comedies",
    title: "Dark Comedies",
    movies: [
      { id: 25, title: "Beef", year: "2023", rating: "TV-MA", image: `${imageBase}/pwjQ4kYhT3CwD1xL4H3gVfLijbo.jpg` },
      { id: 26, title: "The Gentlemen", year: "2024", rating: "TV-MA", image: `${imageBase}/f8z7H1Y5yqV5NnSHpLw4zXhHDhN.jpg` },
      { id: 27, title: "Glass Onion", year: "2022", rating: "PG-13", image: `${imageBase}/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg` },
      { id: 28, title: "Do Revenge", year: "2022", rating: "TV-MA", image: `${imageBase}/akIjKJDHcVN4bzifcEarK8B0RkH.jpg` },
      { id: 29, title: "The Chair", year: "2021", rating: "TV-MA", image: `${imageBase}/l6iOq2TS4FJkV7cHRnl2svDURwC.jpg` },
      { id: 30, title: "Russian Doll", year: "2022", rating: "TV-MA", image: `${imageBase}/43c0KQ9k0J5jXXPWV4L7qHNJqTC.jpg` },
    ],
  },
];
