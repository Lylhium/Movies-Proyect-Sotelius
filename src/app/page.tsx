"use client";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "./movie.service";
import CardUI from "../components/card";
import Loading from "@/components/loading";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movies.map((movie) => (
          <CardUI key={movie.id} movie={movie}></CardUI>
        ))}
      </div>
    </main>
  );
}
