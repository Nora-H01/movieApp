import { useState, useRef } from "react";
import { genres, movies } from "./testMovie";

export default function Profil() {
    return (
        <div className="font-lato">
            <section>
            <div>
                <h1 className="flex justify-center font-bold text-2xl -tracking-1 mb-6">
                <span className="bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">PRO</span>
                <span className="text-white">FIL</span>
                </h1>
            </div>
            </section>

            <section>
                <div className="border-b border-gray-800">
                    <div className="text-movie-grey my-2 mx-4 ">
                        <p className="">Username :</p>
                        <p className="">Country :</p>
                        <p className="">Age :</p>
                    </div>
                </div>

                <div className="border-b border-gray-800">
                    <h2 className="flex justify-around text-white text-2xl my-3">Favorites Movies</h2>
                        <div className="text-movie-grey my-2 mx-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                            <div className="flex space-x-4">
                            {movies.Fantasy.slice(0, 2).concat(movies.Horror.slice(0, 1), movies["Science Fiction"].slice(0, 1), movies.Documentary.slice(0, 1), movies.Comedy.slice(0, 1)).map((movie, index) => (
                                <div key={index} className={`p-3 rounded-lg min-w-[150px] sm:min-w-[200px] md:min-w-[250px]`}>
                                    <div className={`w-full h-34 rounded-lg ${movie.color}`}></div>
                                    <p> 
                                        <span className="text-white text-sm">{movie.title} </span> <br />
                                        <span className="text-movie-grey text-xs">({movie.year})</span>
                                    </p>
                                </div>
                            ))}
                            </div>
                        </div>
                </div>

                <div className="border-b border-gray-800">
                    <h2 className="flex justify-around text-white text-2xl my-3">Next Movies</h2>
                        <div className="text-movie-grey my-2 mx-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                            <div className="flex space-x-4">
                            {movies.Fantasy.slice(0, 1).concat(movies.Horror.slice(0, 2), movies["Science Fiction"].slice(0, 2), movies.Documentary.slice(0, 2), movies.Comedy.slice(0, 2)).map((movie, index) => (
                                <div key={index} className={`p-3 rounded-lg min-w-[150px] sm:min-w-[200px] md:min-w-[250px]`}>
                                    <div className={`w-full h-34 rounded-lg ${movie.color}`}></div>
                                    <p> 
                                        <span className="text-white text-sm">{movie.title} </span> <br />
                                        <span className="text-movie-grey text-xs">({movie.year})</span>
                                    </p>
                                </div>
                            ))}
                            </div>
                        </div>
                </div>

            </section>
        </div>

        
    );
}