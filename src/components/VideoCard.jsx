import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Card>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component="img"
          height="180"
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
      </Link>

      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {video.snippet.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {video.snippet.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;