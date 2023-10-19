"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { getMovieDetails } from "@/app/movie.service";

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/original";

const MovieDetailsComponent = ({ movie }: { movie: any }) => {
  return (
    <div className='text-white p-4'>
      <div className='md:flex md:items-center'>
        <div className='md:w-1/2'>
          <img
            src={IMG_BASE_URL + movie.poster_path}
            alt={movie.title}
            className='rounded-lg shadow-lg mx-auto mb-4'
            style={{ maxWidth: "60%" }}
          />
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-bold mb-4 md:text-2xl md:mb-2'>
            {movie.title}{" "}
            <a className='text-gray-400 text-sm '>
              ({new Date(movie.release_date).getFullYear()})
            </a>
          </h1>

          <h2 className='text-2xl text-gray-300 mb-4 md:text-xl md:mb-2'>
            {movie.tagline}
          </h2>
          <p className='text-lg text-gray-200 mb-4 md:text-base md:mb-2'>
            {movie.overview}
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <strong className='text-lg md:text-base'>Genres: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.genres.map((genre: any) => (
                  <span
                    className='inline-block bg-gradient-to-r from-orange-600 to-transparent text-white px-3 py-1 rounded-lg mr-2'
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Release Date: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.release_date}
              </p>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Runtime: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.runtime} minutes
              </p>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Votes: </strong>
              <strong className='text-lg md:text-base'>
                <FontAwesomeIcon icon={faThumbsUp} /> {movie.vote_count}
              </strong>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Vote Average: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                <FontAwesomeIcon icon={faStar} color='#f4d83a' />{" "}
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Languages : </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.spoken_languages.map((language: any) => (
                  <span
                    className='inline-block bg-gradient-to-r from-orange-600 to-transparent text-white px-3 py-1 rounded-lg mr-2'
                    key={language.iso_639_1}
                  >
                    {language.iso_639_1}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MoviePage({ params }: any) {
  const [movieDetails, setMovieDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(params.id);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [params.id]);
  if (movieDetails === null) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          className='loading loading-spinner loading-lg'
          style={{ transition: "opacity 2s" }}
        ></span>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
            IMG_BASE_URL + movieDetails.backdrop_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <MovieDetailsComponent movie={movieDetails} />
      </div>
    </div>
  );
}
