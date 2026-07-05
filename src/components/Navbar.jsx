import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#fff",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              color: "red",
              fontWeight: "bold",
            }}
          >
            YouTube
          </Typography>
        </Link>

        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;