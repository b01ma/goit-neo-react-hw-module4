import axios from "axios";

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const API_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page, perPage = 12) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: UNSPLASH_API_KEY,
      },
    });

    return {
      results: response.data.results,
      totalPages: response.data.total_pages,
      total: response.data.total,
    };
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error("API limit exceeded. Please try again later.");
    }
    throw new Error(error.message || "Failed to fetch images");
  }
};
