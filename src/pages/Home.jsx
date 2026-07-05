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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);

      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );

      if (data?.items) {
        setVideos(data.items);
      } else {
        setVideos([]);
      }

      setLoading(false);
    };

    loadVideos();
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Box sx={{ flex: 1, p: 2 }}>
          <Typography variant="h5" mb={2}>
            {selectedCategory} Videos
          </Typography>

          {loading ? (
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