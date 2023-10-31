const API_KEY = "77f3cadb497722d6b57cf23f4e4c2032";

const BASE_URL = "https://api.themoviedb.org/3";

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
