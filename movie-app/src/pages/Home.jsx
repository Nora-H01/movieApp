import { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { fetchPopularMovies } from "../api"; 

export default function Home() {
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0); 
  const [activeTrendingIndex, setActiveTrendingIndex] = useState(0); 
  const [spotlightMovies, setSpotlightMovies] = useState([]); 
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => {
        setSpotlightMovies(data.slice(0, 4)); //4 first movies>->Spotlight
        setTrendingMovies(data); // all list -> Trending
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
        setLoading(false);
      });
  }, []);

  // auto change Spotlight -> 5sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpotlightIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-lato w-screen text-white flex flex-col items-center justify-center">

      {/* Movie Spotlight */}
        <section>
        <div
            className="mx-5 w-[327px] md:w-screen h-[191px] md:h-[300] bg-cover bg-center rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500"
            style={{
            backgroundImage:
                spotlightMovies.length > 0
                ? `url(https://image.tmdb.org/t/p/w500${spotlightMovies[activeSpotlightIndex]?.backdrop_path})`
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >

            {/* Contenu du Spotlight */}
            <div className="absolute bottom-2 left-0 w-[211px] h-[62px] bg-gray-500/30 backdrop-blur-xs inset-shadow-xs inset-shadow-gray-500 mx-3 p-3 rounded-2xl flex items-center">
            <div className="mx-4 scale-110">
                <a href="#">
                <img src="../public/play.svg" alt="Play" />
                </a>
            </div>
            <div>
                <h2 className="text-movie-grey text-xs">Movie Spotlight</h2>
                <h2 className="text-white text-base font-semibold">
                {spotlightMovies.length > 0 && spotlightMovies[activeSpotlightIndex]?.title}
                </h2>
            </div>
            </div>
        </div>
        </section>

      {/* Trending */}
        <section>
        <div>
            <h1 className="pt-5 font-lato text-2xl text-white">Trending</h1>
        </div>
        <div className="relative w-full flex flex-col items-center">
            <div className="relative w-[320px] h-[400px] overflow-hidden flex justify-center items-center">
            <AnimatePresence initial={false}>
                {loading ? (
                <div className="text-white">Loading...</div>
                ) : (
                trendingMovies.map((movie, index) => {
                    const isActive = index === activeTrendingIndex;
                    const position = index - activeTrendingIndex;

                    const moviePoster = movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image";

                    return (
                    <motion.div
                        key={movie.id}
                        onClick={() => setActiveTrendingIndex(index)}
                        className="absolute cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 bg-gray-700"
                        animate={{
                        scale: isActive ? 1.0 : 1.0,
                        x: position * 260,
                        opacity: isActive ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                        width: isActive ? "258px" : "224px",
                        height: isActive ? "359px" : "296px",
                        zIndex: isActive ? 10 : 5,
                        }}
                    >
                        <img
                        src={moviePoster}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-2xl"
                        />

                        {/* IMDb flou */}
                        <div className="absolute top-5 right-5 w-[77px] h-[49px] bg-gray-500/30 backdrop-blur-xs inset-shadow-xs inset-shadow-gray-500 rounded-2xl flex flex-col">
                        <div className="mt-1 ml-4">
                            <h2 className="text-white text-xs">IMDb</h2>
                        </div>
                        <div className="flex items-center space-x-1 ml-4 gap-2">
                            <img className="mb-1 scale-110" src="../public/star.svg" alt="Star" />
                            <h2 className="pb-1 text-white text-base font-semibold">
                            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                            </h2>
                        </div>
                        </div>

                        {/* Movie Name flou */}
                        <div className="flex justify-center items-end">
                        <div className="absolute bottom-5 mx-auto left-0 right-0 w-[13.1875rem] h-[3.875rem] bg-gray-500/30 backdrop-blur-xs inset-shadow-xs inset-shadow-gray-500 rounded-2xl flex items-center justify-center">
                            <h2 className="align-center text-white text-base">{movie.title}</h2>
                        </div>
                        </div>
                    </motion.div>
                    );
                })
                )}
            </AnimatePresence>
            </div>
        </div>
        </section>

    </div>
  );
}
