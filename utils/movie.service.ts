const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
    );
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

export const getMovieDetails = async (id: any) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getTrailer = async (id: any) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getCredits = async (id: any) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getPerson = async (id: any) => {
  const res = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const getDiscoverMovies = async (page: any) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?page=${page}&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getSearchMovies = async (query: any) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
export const getMovieReviews = async (id: any) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await res.json();

  // Assuming the data structure includes a 'results' property containing the reviews
  return data.results || [];
};
