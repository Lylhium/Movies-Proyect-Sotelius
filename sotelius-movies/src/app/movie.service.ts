import axios from "axios";

const API_KEY = "77f3cadb497722d6b57cf23f4e4c2032";

const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("error");
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};
