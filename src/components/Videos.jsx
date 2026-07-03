import VideoCard from "./VideoCard";
import { Box } from "@mui/material";

function Videos({ videos }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </Box>
  );
}

export default Videos;