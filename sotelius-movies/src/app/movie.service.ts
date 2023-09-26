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
