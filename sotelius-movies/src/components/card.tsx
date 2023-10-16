import React, { useState } from "react";
import Link from "next/link";

export default function MovieCard({ movie }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const maxOverviewLength = 150; // Define your character limit
  const [showFullOverview, setShowFullOverview] = useState(false);

  const truncatedOverview =
    movie.overview.length > maxOverviewLength && !showFullOverview
      ? movie.overview.slice(0, maxOverviewLength) + "..."
      : movie.overview;

  return (
    <div className='max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
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
        <h2 className='text-lg font-semibold mb-2'>{movie.title}</h2>
        <p className='text-gray-600 text-sm'>
          {showFullOverview ? movie.overview : truncatedOverview}
        </p>
        {movie.overview.length > maxOverviewLength &&
          (showFullOverview ? (
            <button
              onClick={() => setShowFullOverview(false)}
              className='text-orange-500 hover:underline cursor-pointer'
            >
              Ver menos
            </button>
          ) : (
            <button
              onClick={() => setShowFullOverview(true)}
              className='text-orange-500 hover:underline cursor-pointer'
            >
              Ver más
            </button>
          ))}
      </div>
      <div className='p-4 text-center'>
        <Link href={"/movie/" + movie.id} legacyBehavior>
          <a className='bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full inline-block'>
            Ver más
          </a>
        </Link>
      </div>
    </div>
  );
}
