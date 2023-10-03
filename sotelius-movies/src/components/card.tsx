import React from "react";
import Link from "next/link";
export default function App({ movie }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <Link href={"/movie/" + movie.id}>
        <figure>
          <img src={IMG_BASE_URL + movie.poster_path} alt='movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>see more info.</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
