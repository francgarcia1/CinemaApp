import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Hero search={debouncedSearch}></Hero>
      <h1>Top peliculas en taquillas</h1>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
