import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #ccc",
        pl: 2,
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <TextField
        variant="standard"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ flex: 1 }}
      />

      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;