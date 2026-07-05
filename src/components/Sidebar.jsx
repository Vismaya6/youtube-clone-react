import { Stack, Button } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="column"
      sx={{
        width: 200,
        p: 2,
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          variant={
            selectedCategory === category.name
              ? "contained"
              : "text"
          }
          sx={{
            justifyContent: "flex-start",
            mb: 1,
          }}
        >
          {category.name}
        </Button>
      ))}
    </Stack>
  );
}

export default Sidebar;