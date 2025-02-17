import { useParams, useNavigate } from "react-router-dom";

const movies = {
  "star-wars": {
    title: "Star Wars: The Last Jedi",
    year: 2017,
    duration: "152 minutes",
    rating: "7.0 IMDb",
    releaseDate: "December 9, 2017",
    genres: ["Action", "Sci-Fi"],
    synopsis:
      "Rey (Daisy Ridley) finally manages to find the legendary Jedi knight, Luke Skywalker (Mark Hamill) on an island with a magical aura. The heroes of The Force Awakens including Leia, Finn... ",
    relatedMovies: [
      { title: "Star Wars: The Rise of Skywalker", year: 2019, color: "bg-red-500" },
      { title: "Star Wars: The Force Awakens", year: 2015, color: "bg-blue-500" },
      { title: "Rogue One: A Star Wars Story", year: 2016, color: "bg-gray-500" },
    ],
    color: "bg-gray-800",
  },
};

export default function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const defaultMovieId = "star-wars";
  const movie = movies[movieId] || movies[defaultMovieId];

  if (!movie) return <div className="text-white text-center p-5">No movie selected.</div>;

  return (
    <div className="text-white font-lato">
        {/* Image */}
      <section>
        <div className={`w-full h-75 ${movie.color} flex items-center justify-center text-xl font-bold`}>
          Movie Image
        </div>
      </section>

      {/* Movie Info */}
      <section className="px-5 ">
        <div className="border-b border-gray-800">
          <h2 className="text-2xl mt-3">{movie.title} <span className="ml-2 text-xs tracking-4 border border-gray-600 px-2 py-1 rounded">4K</span></h2>
          <p className="mb-5 mt-2">
            <span className="text-movie-grey">🕒{movie.duration} </span> 
            <span className="ml-5 text-movie-grey">⭐ {movie.rating}</span> 
          </p>
        </div>
        
        {/* Details */}
        <div className="mt-4 border-b border-gray-800 grid grid-cols-2 gap-2 tracking-2">
          <div>
            <h3 className="text-base">Release date</h3>
            <p className="text-movie-grey mt-2">{movie.releaseDate}</p>
          </div>

          <div className="mb-5">
            <h3 className="text-base">Genre</h3>
            <p className="flex gap-2 mt-1">
              {movie.genres.map((genre, index) => (
                <span key={index} className="text-movie-grey border border-gray-600 px-3 py-1 rounded-full text-sm">{genre}</span>
              ))}
            </p>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-3 tracking-2">
          <h3 className="text-base mb-2">Synopsis</h3>
          <p className="text-xs text-movie-grey">{movie.synopsis} 
            <span className="text-sm text-white">Read more..</span>
          </p>
        </div>
        
        {/* Related Movies */}
        <div className="mt-4 tracking-2">
          <h3 className="text-base">Related Movies</h3>
          <div className="flex gap-5 mt-3 overflow-x-auto">
            {movie.relatedMovies.map((rel, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-43 h-33 rounded-3xl ${rel.color}`}></div>
                  <p className="text-xs ml-2 my-3"> 
                    <span className="text-center">{rel.title}</span>
                    <span className="text-movie-grey"> ({rel.year})</span>
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
