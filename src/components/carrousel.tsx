import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MovieCarousel({ movies }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/original";

  return (
    <div className='mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] xl:w-[1400px]'>
      <Carousel
        autoPlay
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
          <div key={movie.id} className='carousel-item relative'>
            <div className='absolute inset-0 bg-black bg-opacity-60'></div>
            <img
              src={`${IMG_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              className='w-full h-100 object-cover'
            />
            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 p-4 w-1/3'>
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className='w-64 h-65 object-cover'
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
