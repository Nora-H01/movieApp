import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div className="text-white text-center p-5">Loading...</div>;

  return (
    <div className="text-white font-lato">
      {/* Image */}
      <section>
        <div className="w-full h-75 bg-gray-800 flex items-center justify-center text-xl font-bold relative">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="absolute w-full h-full object-cover brightness-50"
          />
        </div>
      </section>

      {/* Movie Info */}
      <section className="px-5">
        <div className="border-b border-gray-800">
          <h2 className="text-2xl mt-3">
            {movie.title}{" "}
            <span className="ml-2 text-xs tracking-4 border border-gray-600 px-2 py-1 rounded">4K</span>
          </h2>
          <p className="mb-5 mt-2">
            <span className="text-movie-grey">🕒 {movie.runtime} min </span>
            <span className="ml-5 text-movie-grey">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
          </p>
        </div>

        {/* Details */}
        <div className="mt-4 border-b border-gray-800 grid grid-cols-2 gap-2 tracking-2">
          <div>
            <h3 className="text-base">Release date</h3>
            <p className="text-movie-grey mt-2">{movie.release_date}</p>
          </div>

          <div className="mb-5">
            <h3 className="text-base">Genre</h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="text-movie-grey border border-gray-600 px-3 py-1 rounded-full text-sm inline-flex">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-3 tracking-2">
          <h3 className="text-base mb-2">Synopsis</h3>
          <p className="text-xs text-movie-grey">
            {movie.overview || "No synopsis available."}{" "}
            <span className="text-sm text-white">Read more..</span>
          </p>
        </div>

        {/* Recommended Movies */}
        <div className="mt-4 tracking-2">
          <h3 className="text-base">Related Movies</h3>
          <div className="flex gap-5 mt-3 overflow-x-auto">
            {movie.recommendations?.results?.slice(0, 5).map((rel) => (
              <div key={rel.id} className="flex flex-col items-center">
                <div
                  className="w-43 h-33 rounded-3xl bg-gray-700"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${rel.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <p className="text-xs ml-2 my-3">
                  <span className="text-center">{rel.title}</span>
                  <span className="text-movie-grey"> ({rel.release_date?.split("-")[0]})</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section>
        <div className="flex justify-center">
          <button onClick={() => navigate(-1)} className="py-1 px-2 m-3 bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">
            ← Back
          </button>
        </div>
      </section>
    </div>
  );
}
