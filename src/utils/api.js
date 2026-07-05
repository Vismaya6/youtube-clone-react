import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "20",
  },
  headers: {
    "X-RapidAPI-Key": "bd3c96af35msh3668d31ce78e5c1p12f11ajsndf2290da27ba",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${url}`,
      options
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error);

    return {
      items: [],
    };
  }
};