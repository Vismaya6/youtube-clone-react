import { AppBar, Toolbar, Typography, Box, TextField, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <YouTubeIcon sx={{ color: "red", fontSize: 40, mr: 1 }} />
          <Typography variant="h6">YouTube Clone</Typography>
        </Box>

        <Box sx={{ display: "flex", width: "40%" }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              background: "#fff",
              borderRadius: 1,
            }}
          />

          <Button
            variant="contained"
            sx={{ ml: 1 }}
            onClick={handleSearch}
          >
            <SearchIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;