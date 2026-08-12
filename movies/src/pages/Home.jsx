import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const inputRef = useRef();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      ` http://www.omdbapi.com/?apikey=54e55a76&s=${query}`,
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    }
  };
  return (
    <div className="text-white p-6">
      <form
        onSubmit={handleSearch}
        className="max-w-xl mx-auto flex gap-3 mb-10"
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          ref={inputRef}
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
