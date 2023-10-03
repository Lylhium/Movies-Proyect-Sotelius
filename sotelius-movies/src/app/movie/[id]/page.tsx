import { getMovieDetails } from "@/app/movie.service";

import React from "react";
export default async function Home({ params }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const movieDetails = await getMovieDetails(params.id);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
      <div>
        <img src={IMG_BASE_URL + movieDetails.backdrop_path} />
        <h1>{movieDetails.title}</h1>
      </div>
    </main>
  );
}
