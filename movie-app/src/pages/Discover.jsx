import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";  // ⬅️ Import de useNavigate
import { fetchGenres, fetchTrendingMovies, searchMovies } from "../api";

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const genreRef = useRef(null);
  const navigate = useNavigate(); // ⬅️ Initialisation de useNavigate

  useEffect(() => {
    fetchGenres().then(setGenres);
    fetchTrendingMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = await searchMovies(query);
      setMovies(results);
    } else {
      fetchTrendingMovies().then(setMovies);
    }
  };

  const handleGenreChange = async (genreId, index) => {
    setSelectedGenre(genreId);
    if (genreId) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&with_genres=${genreId}`
      );
      const data = await response.json();
      setMovies(data.results);
    } else {
      fetchTrendingMovies().then(setMovies);
    }

    if (genreRef.current) {
      const genreElement = genreRef.current.children[index];
      genreRef.current.scrollTo({
        left: genreElement.offsetLeft - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-lato p-5 text-white">
      {/* Search Bar */}
      <section>
        <div className="search-bar mb-8 flex items-center justify-center relative">
          <img className="absolute left-12 w-5 h-5" src="../public/Frame.svg" alt="Search" />
          <input
            type="text"
            className="bg-movie-blueDark mx-7 py-3 rounded-3xl w-full text-movie-greyDark pl-12"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </section>

      {/* Genre - Horizontal Scroll */}
      <section className="mb-5">
        <div
          ref={genreRef}
          className="flex gap-4 text-base pb-1 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth"
        >
          <button
            className={`px-3 py-1 ${
              selectedGenre === null
                ? "bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent scale-110"
                : "text-white scale-100"
            } transition-all duration-300 hover:scale-105 hover:border-b-4`}
            onClick={() => handleGenreChange(null, 0)}
          >
            All
          </button>
          {genres.map((genre, index) => (
            <button
              key={genre.id}
              className={`px-3 py-1 ${
                selectedGenre === genre.id
                  ? "bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent scale-110"
                  : "text-white scale-100"
              } transition-all duration-300 hover:scale-105 hover:border-b-4`}
              onClick={() => handleGenreChange(genre.id, index + 1)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </section>

      {/* Movies Grid */}
      <section>
        <div className="grid grid-cols-2 gap-4 max-h-[calc(2.5*200px)] overflow-y-auto">
          {movies.map((movie) => {
            const randomHeight = Math.floor(Math.random() * 40) + 160;

            return (
              <div
                key={movie.id}
                className="relative flex flex-col p-1 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/movie/${movie.id}`)} // ⬅️ Ajout de la navigation
              >
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[160px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ height: `${randomHeight}px` }}
                />
                {/* Movie Title */}
                <p className="text-left">
                  <span className="mt-2 text-base">{movie.title}</span>
                  <span className="text-movie-grey"> ({movie.release_date?.split("-")[0]})</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
