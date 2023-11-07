import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { TrailerModal } from "./trailerModal";
import { getTrailer } from "../../utils/movie.service";

export default function MovieCard({ movie }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const maxOverviewLength = 150;
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState<any | null>(null);

  useEffect(() => {
    const fetchGetTrailer = async () => {
      try {
        const trailer = await getTrailer(movie.id);
        setMovieTrailer(trailer);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    fetchGetTrailer();
  }, [movie.id]);

  const openTrailerModal = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailerModal = () => {
    setIsTrailerOpen(false);
  };

  const truncatedOverview =
    movie.overview.length > maxOverviewLength && !showFullOverview
      ? movie.overview.slice(0, maxOverviewLength) + "..."
      : movie.overview;

  return (
    <div className='max-w-xs mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden'>
      <Link href={"/movie/" + movie.id}>
        <figure>
          <img
            src={IMG_BASE_URL + movie.poster_path}
            alt={movie.title}
            className='w-full h-auto'
          />
        </figure>
      </Link>
      <div className='p-4'>
        <Link href={"/movie/" + movie.id}>
          <div className='text-lg font-semibold mb-2'>
            {movie.title}{" "}
            <span className='text-gray-400 text-sm'>
              ({new Date(movie.release_date).getFullYear()})
            </span>
          </div>
        </Link>

        <div className='flex items-center pb-2'>
          <span className='mr-1'>
            <FaStar color='orange' />
          </span>
          <span className='text-sm font-bold'>
            {movie.vote_average.toFixed(1)}
          </span>
        </div>

        <p className='normal-case text-sm text-base-content'>
          {showFullOverview ? movie.overview : truncatedOverview}
        </p>
        {movie.overview.length > maxOverviewLength &&
          (showFullOverview ? (
            <button
              onClick={() => setShowFullOverview(false)}
              className='text-orange-500 hover:underline cursor-pointer text-xs'
            >
              See less
            </button>
          ) : (
            <button
              onClick={() => setShowFullOverview(true)}
              className='text-orange-500 hover:underline cursor-pointer text-xs '
            >
              More Info
            </button>
          ))}
      </div>
      <div className='flex items-center justify-center pb-4'>
        <button
          className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none '
          onClick={openTrailerModal}
        >
          Watch Trailer
        </button>
        {isTrailerOpen && (
          <TrailerModal trailer={movieTrailer} onClose={closeTrailerModal} />
        )}
      </div>
    </div>
  );
}
