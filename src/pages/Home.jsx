import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/api";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Box p={2} sx={{ flex: 2 }}>
          <Typography variant="h5" mb={2}>
            {selectedCategory} Videos
          </Typography>

          {!videos.length ? (
            <Loader />
          ) : (
            <Videos videos={videos} />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Home;