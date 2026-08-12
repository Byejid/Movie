import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=54e55a76&i=${id}`,
      );
      const data = await res.json();
      setMovie(data);
    }

    getMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-2xl animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Poster */}
          <div className="md:w-1/3">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-4xl font-bold mb-4 text-red-500">
              {movie.Title}
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
                {movie.Year}
              </span>

              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                {movie.Rated}
              </span>

              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                ⭐ {movie.imdbRating}
              </span>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Genre:</strong> {movie.Genre}
              </p>

              <p>
                <strong className="text-white">Released:</strong>{" "}
                {movie.Released}
              </p>

              <p>
                <strong className="text-white">Director:</strong>{" "}
                {movie.Director}
              </p>

              <p>
                <strong className="text-white">Actors:</strong> {movie.Actors}
              </p>

              <p>
                <strong className="text-white">Runtime:</strong> {movie.Runtime}
              </p>

              <p>
                <strong className="text-white">Language:</strong>{" "}
                {movie.Language}
              </p>

              <p className="leading-relaxed">
                <strong className="text-white">Plot:</strong> {movie.Plot}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
