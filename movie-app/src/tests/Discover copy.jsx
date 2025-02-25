import { useState, useRef } from "react";
import { genres, movies } from "../pages/testMovie";

export default function Discover() {
  const [selectedGenre, setSelectedGenre] = useState("Fantasy");
  const genreRef = useRef(null);

  // scroll genre
  const scrollToGenre = (index) => {
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
          />
        </div>
      </section>

      {/* Genre - Horizontal Scroll */}
      <section className="mb-5">
        <div 
          ref={genreRef} 
          className="flex gap-4 text-base pb-1 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth"
        >
          {genres.map((genre, index) => (
            <button
              key={genre}
              className={`px-3 py-1 ${
                selectedGenre === genre
                  ? "bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent scale-110"
                  : "text-white scale-100"
              } transition-all duration-300 hover:scale-105 hover:border-b-4`}
              onClick={() => {
                setSelectedGenre(genre);
                scrollToGenre(index);
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Movies Grid - 2 movies */}
      <section>
        <div className="grid grid-cols-2 gap-4 max-h-[calc(2.5*200px)] overflow-y-auto">
            {movies[selectedGenre].map((movie, index) => {
            // size |e| 160px & 200px
            const randomHeight = Math.floor(Math.random() * 40) + 160;

            return (
                <div
                key={index}
                className="relative flex flex-col p-1 rounded-xl transition-all duration-300 hover:scale-105"
                >
                {/* color with hover */}
                <div
                    className={`w-[160px] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 ${movie.color}`}
                    style={{ height: `${randomHeight}px` }}
                ></div>

                <p className="text-left">
                    <span className="mt-2 text-base">{movie.title}</span>
                    <span className="text-movie-grey"> ({movie.year})</span>
                </p>
                </div>
            );
            })}
        </div>
        </section>

    </div>
  );
}