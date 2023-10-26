"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { getMovieDetails, getTrailer, getCredits } from "@/app/movie.service";
import CreditModal from "@/components/creditModal";
import Loading from "@/components/loading";

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/original";

const MovieDetailsComponent = ({
  movie,
  trailer,
  credit,
}: {
  movie: any;
  trailer: any;
  credit: any;
}) => {
  const colors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-400",
    "bg-green-400",
  ];
  const starsToDisplay = Math.round(movie.vote_average / 2);
  const starColor = colors[Math.min(starsToDisplay - 1, 4)];

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
          <div className='text-md md:text-md text-gray-300 mb-4 md:mb-2'>
            {movie.tagline}{" "}
          </div>
          <div>
            {trailer && trailer.results && trailer.results.length > 0 ? (
              <div className='rounded-lg overflow-hidden mb-4'>
                <p className='inline-block bg-gradient-to-r from-orange-600 to-transparent text-white px-3 py-1 rounded-lg mr-2'>
                  Trailer Language: {trailer.results[0].iso_639_1}
                </p>
                <div className='relative' style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className='absolute top-0 left-0 w-full h-full'
                    src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
                    title={trailer.results[0].name}
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <p className='text-white'>No hay datos de trailer disponibles</p>
            )}
          </div>
          <strong className='text-lg md:text-base'>Overview: </strong>
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
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
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
              <div>
                <div className='rating gap-2' style={{ fontSize: "0.8rem" }}>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      type='radio'
                      name='rating-3'
                      className={`mask mask-heart ${
                        index <= starsToDisplay ? starColor : "bg-gray-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
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
            <div>
              <strong className='text-lg md:text-base'>Budget: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div>
              <strong className='text-lg md:text-base'>Revenue: </strong>
              <p className='text-lg text-gray-200 md:text-base'>
                {movie.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CreditModal credit={credit} IMG_BASE_URL={IMG_BASE_URL} />
    </div>
  );
};

export default function MoviePage({ params }: any) {
  const [movieDetails, setMovieDetails] = useState<any | null>(null);

  const [movieTrailer, setMovieTrailer] = useState<any | null>(null);

  const [movieCredits, setMovieCredits] = useState<any | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(params.id);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchGetTrailer = async () => {
      try {
        const trailer = await getTrailer(params.id);
        setMovieTrailer(trailer);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    const fetchGetCredits = async () => {
      try {
        const credits = await getCredits(params.id);
        setMovieCredits(credits);
      } catch (error) {
        console.error(`error getting movie credits`);
      }
    };

    fetchMovieDetails();
    fetchGetTrailer();
    fetchGetCredits();
  }, [params.id]);

  if (movieDetails === null) {
    return <Loading />;
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
        <MovieDetailsComponent
          movie={movieDetails}
          trailer={movieTrailer}
          credit={movieCredits}
        />
      </div>
    </div>
  );
}
