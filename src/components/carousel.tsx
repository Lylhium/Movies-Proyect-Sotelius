import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

export default function MovieCarousel({ movies }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/original";
  const isMobile = useMediaQuery("(max-width: 768px)") || false;

  return (
    <div className='mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1000px] xl:w-[1300px] '>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        swipeable
        dynamicHeight
        emulateTouch
        thumbWidth={60}
        className='carousel-container relative'
      >
        {movies.map((movie: any) => (
          <div key={movie.id} className='carousel-item relative '>
            <div className='absolute inset-0 bg-black bg-opacity-80'></div>
            <img
              src={`${IMG_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              className='w-full h-100 object-cover'
            />
            <Link href={"/movie/" + movie.id}>
              <div className='absolute left-10 top-1/2 transform -translate-y-1/2 p-4 w-1/3'>
                <img
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className='object-cover rounded-lg sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96'
                />
              </div>
            </Link>
            <div className='absolute left-1/2 top-1/2 transform -translate-y-1/2 p-4 w-1/3'>
              <Link href={"/movie/" + movie.id}>
                <div
                  className={`text-auto font-semibold mb-2 text-white ${
                    isMobile ? "" : ""
                  }`}
                >
                  {isMobile && movie.title.length > 20 ? (
                    <span title={movie.title}>
                      {movie.title.substring(0, 20)}...
                    </span>
                  ) : (
                    movie.title
                  )}
                  <span className='text-gray-400 text-sm'>
                    ({new Date(movie.release_date).getFullYear()})
                  </span>
                </div>
              </Link>
              <div className='flex items-center justify-center py-2'>
                <Link href={"/movie/" + movie.id}>
                  <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none '>
                    Watch Trailer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
