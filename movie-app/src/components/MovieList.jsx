import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api"; // Importer la fonction API

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };
    loadMovies();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 text-white p-2 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded"
          />
          <h3 className="mt-2 text-lg">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
