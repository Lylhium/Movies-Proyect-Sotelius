"use client";
import React, { useState, useEffect } from "react";
import { getSearchMovies } from "../../movie.service";
import CardUI from "../../../components/card";

const SearchMovie = ({ params }: any) => {
  const [searchMovies, setSearchMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchResults = await getSearchMovies(params.query);
        setSearchMovies(searchResults);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchSearchMovies();
  }, [params]);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <div className='py-2'> Movies with the name :</div>
      <div className='text-orange-500 text-3xl font-semibold pb-4 '>
        {params.query}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {searchMovies.map((movie: any) => (
          <CardUI key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default SearchMovie;
