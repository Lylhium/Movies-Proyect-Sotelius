import React from "react";
import { searchMovies } from "./movie.service";
export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
      <h1> home landing</h1>
      <div>Top trending movies</div>
    </main>
  );
}
