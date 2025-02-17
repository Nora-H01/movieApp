import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const movies = [
  { id: 1, title: "Star Wars: The Last Jedi", rating: "7.0", color: "bg-red-700" },
  { id: 2, title: "Interstellar", rating: "8.6", color: "bg-blue-700" },
  { id: 3, title: "Inception", rating: "8.8", color: "bg-green-700" },
  { id: 4, title: "The Matrix", rating: "8.7", color: "bg-purple-700" },
  { id: 5, title: "Avatar", rating: "7.8", color: "bg-teal-700" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="font-lato  text-white flex flex-col items-center justify-center">
      {/* movie */}
      <section>
                <div className="mx-5 w-[327px] h-[191px] bg-blue-700 rounded-2xl flex items-center justify-center relative overflow-hidden">

                    <div className="absolute inset-0 bg-gray-800/50 rounded-2xl"></div>

                    <div className="absolute bottom-2 left-0 w-[211px] h-[62px] bg-gray-500/30 backdrop-blur-md inset-shadow-xs inset-shadow-gray-500 mx-3 p-3 rounded-2xl flex items-center justify-start">
                        <div className="mx-4 scale-110">
                            <a href="#"><img src="../public/play.svg" alt="Play" /></a>
                        </div>
                        <div>
                            <h2 className="text-movie-grey text-xs">Movie Spotlight</h2>
                            <h2 className="text-white text-base">Movie Name</h2> 
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
                {movies.map((movie, index) => {
                const isActive = index === activeIndex;
                const position = index - activeIndex;

                return (
                    <motion.div
                    key={movie.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${movie.color}`}
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
                    {/* IMDb flou */}
                    <div className="absolute top-5 right-5 w-[77px] h-[49px] bg-gray-500/30 backdrop-blur-md inset-shadow-xs inset-shadow-gray-500 rounded-2xl flex flex-col">
                        <div className="mt-1 ml-4">
                            <h2 className="text-white text-xs">IMDb</h2> 
                        </div>
                        <div className="flex items-center space-x-1 ml-4 gap-2">
                            <img className=" mb-1 scale-110" src="../public/star.svg" alt="Star" />
                            <h2 className="pb-1 text-white text-base font-semibold">{movie.rating}</h2>  {/*score API */}
                        </div>
                    </div>

                    {/* Movie Name flou*/}
                    <div className="flex justify-center items-end">
                        <div className="absolute bottom-5 mx-auto left-0 right-0 w-[13.1875rem] h-[3.875rem] bg-gray-500/30 backdrop-blur-md inset-shadow-xs inset-shadow-gray-500 rounded-2xl flex items-center justify-center">
                            <h2 className="align-center text-white text-base">{movie.title}</h2>
                        </div>
                    </div>
                    </motion.div>
                );
                })}
            </AnimatePresence>
            </div>
        </div>
      </section>
    </div>
  );
}
