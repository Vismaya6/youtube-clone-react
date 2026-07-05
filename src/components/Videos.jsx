import { Grid, Typography } from "@mui/material";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  if (!videos || videos.length === 0) {
    return (
      <Typography variant="h6">
        No videos found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={video.id.videoId || video.id}
        >
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;