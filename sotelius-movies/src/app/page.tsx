"use client";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "./movie.service";
import CardUI from "../components/card";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.map((movie) => (
          <CardUI key={movie.id} movie={movie}></CardUI>
        ))}
      </div>
    </main>
  );
}
