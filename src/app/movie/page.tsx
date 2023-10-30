"use client";
import React, { useState, useEffect } from "react";
import { getDiscoverMovies } from "../movie.service";
import CardUI from "../../components/card";

const MoviePage = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [visibleMovies, setVisibleMovies] = useState(8);

  useEffect(() => {
    async function fetchDiscoverMovies() {
      try {
        const trendingMovies = await getDiscoverMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error("Error fetching Discover movies:", error);
      }
    }

    fetchDiscoverMovies();
  }, []);

  const loadMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <h1 className='text-orange-500 text-3xl font-semibold pb-4'>
        Discover Movies
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.slice(0, visibleMovies).map((movie) => (
          <CardUI key={movie.id} movie={movie}></CardUI>
        ))}
      </div>
      {visibleMovies < movies.length && (
        <button onClick={loadMoreMovies} className='text-orange-500 mt-4'>
          Load More
        </button>
      )}
    </main>
  );
};

export default MoviePage;
