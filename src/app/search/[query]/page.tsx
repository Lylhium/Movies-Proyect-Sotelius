"use client";
import React, { useState, useEffect } from "react";
import { getSearchMovies } from "../../../../utils/movie.service";
import CardUI from "../../../components/card";
import Loading from "../../../components/loading";

const SearchMovie = ({ params }: any) => {
  const [searchMovies, setSearchMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchResults = await getSearchMovies(params.query);
        setSearchMovies(searchResults);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setIsLoading(false);
      }
    };
    fetchSearchMovies();
  }, [params]);

  const decodedQuery = decodeURIComponent(params.query);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-6 bg-base-300'>
      <div className='py-2'>Movies with the title</div>
      <div className='text-orange-500 text-3xl font-semibold pb-4 '>
        « {decodedQuery} »
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {searchMovies.map((movie: any) => (
            <CardUI key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default SearchMovie;
