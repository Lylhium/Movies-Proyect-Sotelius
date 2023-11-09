"use client";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../utils/movie.service";
import CardUI from "../components/card";
import Loading from "@/components/loading";
import MovieCarousel from "@/components/carousel";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movieTrailer, setMovieTrailer] = useState<any | null>(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className='flex flex-col items-center justify-center  p-6 bg-base-300'>
      <div className='pb-6 px-auto '>
        <MovieCarousel movies={movies} />
      </div>
      <h1 className='text-orange-500 text-4xl font-bold pb-6'>
        Featured today
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.map((movie) => (
          <CardUI key={movie.id} movie={movie}></CardUI>
        ))}
      </div>
    </main>
  );
}
