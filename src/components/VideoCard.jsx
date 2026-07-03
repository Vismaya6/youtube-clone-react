import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function VideoCard({ video }) {
  const videoId = video?.id?.videoId;

  return (
    <Card>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        sx={{ height: 200 }}
      />

      <CardContent>
        <Typography variant="subtitle1">
          {video?.snippet?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {video?.snippet?.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;