"use client";
import React, { useState, useEffect } from "react";
import { getDiscoverMovies } from "../movie.service";
import CardUI from "../../components/card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loading from "../../components/loading";

const MoviePage = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [moviePage, setMoviePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDiscoverMovies() {
      try {
        const trendingMovies = await getDiscoverMovies(moviePage);
        setMovies(trendingMovies);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching Discover movies:", error);
        setIsLoading(false);
      }
    }

    fetchDiscoverMovies();
  }, [moviePage]);

  const nextPage = () => {
    setMoviePage((prevPage) => prevPage + 1);
    setIsLoading(true);
  };

  const previousPage = () => {
    if (moviePage > 1) {
      setMoviePage((prevPage) => prevPage - 1);
      setIsLoading(true);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <h1 className='text-orange-500 text-3xl font-semibold pb-4'>
        Discover Movies
      </h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {movies.map((movie) => (
            <CardUI key={movie.id} movie={movie}></CardUI>
          ))}
        </div>
      )}

      <div className='text-center mt-4'>
        <div className='flex justify-center'>
          <div className='text-orange-500 cursor-pointer ml-2 rounded-full px-3 py-2 border border-orange-500'>
            {moviePage}
          </div>
        </div>
        <div className='mt-2'>
          <button
            className='bg-orange-500 text-white rounded-full p-3 mr-2'
            onClick={previousPage}
            disabled={moviePage === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            className='bg-orange-500 text-white rounded-full p-3'
            onClick={nextPage}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;
