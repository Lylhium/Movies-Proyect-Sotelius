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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Home landing</h1>
      <div>Top trending movies</div>
      <div className='d-flex flex-wrap gap-3'>
        {movies.map((movie) => (
          <CardUI key={movie.id} movie={movie}></CardUI>
        ))}
      </div>
    </main>
  );
}
