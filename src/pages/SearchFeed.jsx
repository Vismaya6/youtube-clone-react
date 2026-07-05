import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/api";

function SearchFeed() {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <>
      <Navbar />

      <Box p={3}>
        <Typography variant="h5" mb={2}>
          Search Results for "{searchTerm}"
        </Typography>

        {!videos.length ? (
          <Loader />
        ) : (
          <Videos videos={videos} />
        )}
      </Box>
    </>
  );
}

export default SearchFeed;