import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyC7cqz2dphH0M9HPdBUqoiXcSCl31mIFnU"; 

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${url}`,
      {
        params: {
          key: API_KEY,
          maxResults: 20,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error);

    return {
      items: [],
    };
  }
};