import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/api";

function VideoDetail() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
      .then((data) => setVideo(data.items[0]));
  }, [id]);

  if (!video) return <Loader />;

  return (
    <>
      <Navbar />

      <Box p={3}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
        />

        <Typography mt={2} variant="h5">
          {video.snippet.title}
        </Typography>

        <Typography color="gray">
          {video.snippet.channelTitle}
        </Typography>

        <Typography mt={2}>
          {video.snippet.description}
        </Typography>
      </Box>
    </>
  );
}

export default VideoDetail;