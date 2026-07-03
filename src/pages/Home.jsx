import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utils/api";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFromAPI("search?part=snippet&q=trending");

      if (data?.items) {
        setVideos(data.items);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 2 }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
}

export default Home;