import { Grid } from "@mui/material";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  if (!videos?.length) return "Loading...";

  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={video.id.videoId}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;