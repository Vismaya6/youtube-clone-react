import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "bd3c96af35msh3668d31ce78e5c1p12f11ajsndf2290da27ba",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${url}`,
      options
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};