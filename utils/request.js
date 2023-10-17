const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=77f3cadb497722d6b57cf23f4e4c2032`
  );

  const data = await res.json();
  return data.results;
};

export const getMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};
