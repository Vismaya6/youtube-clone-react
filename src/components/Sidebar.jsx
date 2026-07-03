import { Box, Button } from "@mui/material";

const categories = [
  "New",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Education",
  "Movies",
  "Live",
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        p: 2,
        borderRight: "1px solid #ddd",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          fullWidth
          sx={{
            justifyContent: "flex-start",
            mb: 1,
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

export default Sidebar;