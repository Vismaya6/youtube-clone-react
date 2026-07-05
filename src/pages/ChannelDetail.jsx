import Navbar from "../components/Navbar";
import { Typography, Box } from "@mui/material";

function ChannelDetail() {
  return (
    <>
      <Navbar />

      <Box p={4}>
        <Typography variant="h4">
          Channel Page
        </Typography>

        <Typography>
          This page can be expanded later to show channel videos and details.
        </Typography>
      </Box>
    </>
  );
}

export default ChannelDetail;