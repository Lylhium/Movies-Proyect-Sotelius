"use client";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "./movie.service";

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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Home landing</h1>
      <div>Top trending movies</div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </main>
  );
}
