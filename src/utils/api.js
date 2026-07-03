import axios from "axios";

// Base URL of YouTube API (RapidAPI)
const BASE_URL = "https://youtube-v311.p.rapidapi.com";

// Axios configuration
const options = {
  params: {
    maxResults: "20",
  },
  headers: {
    "X-RapidAPI-Key": "bd3c96af35msh3668d31ce78e5c1p12f11ajsndf2290da27ba",
    "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
  },
};

// Generic API fetch function
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};