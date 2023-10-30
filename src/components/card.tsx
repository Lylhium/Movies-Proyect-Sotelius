import React, { useState } from "react";
import Link from "next/link";

export default function MovieCard({ movie }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const maxOverviewLength = 150;
  const [showFullOverview, setShowFullOverview] = useState(false);

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
        <div className='text-lg font-semibold mb-2'>
          {movie.title}{" "}
          <a className='text-gray-400 text-sm'>
            ({new Date(movie.release_date).getFullYear()})
          </a>
        </div>
        <p className='normal-case text-sm text-base-content'>
          {showFullOverview ? movie.overview : truncatedOverview}
        </p>
        {movie.overview.length > maxOverviewLength &&
          (showFullOverview ? (
            <button
              onClick={() => setShowFullOverview(false)}
              className='text-orange-500 hover:underline cursor-pointer'
            >
              See less
            </button>
          ) : (
            <button
              onClick={() => setShowFullOverview(true)}
              className='text-orange-500 hover:underline cursor-pointer '
            >
              More Info
            </button>
          ))}
      </div>
      <div className='p-4 text-center'>
        <Link href={"/movie/" + movie.id} legacyBehavior>
          <a className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full inline-block'>
            More Info
          </a>
        </Link>
      </div>
    </div>
  );
}
