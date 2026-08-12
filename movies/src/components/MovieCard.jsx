import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-300">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-56 object-cover"
      />

      <div className="p-3">
        <h3 className="text-sm font-bold text-white mb-1 truncate">
          {movie.Title}
        </h3>

        <p className="text-gray-400 text-xs mb-3">{movie.Year}</p>

        <Link
          to={`/movie/${movie.imdbID}`}
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
