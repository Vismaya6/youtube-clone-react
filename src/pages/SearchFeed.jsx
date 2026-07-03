import { useParams } from "react-router-dom";

function SearchFeed() {
  const { searchTerm } = useParams();

  return (
    <div style={{ padding: 30 }}>
      <h1>Search Results</h1>

      <h2>{searchTerm}</h2>
    </div>
  );
}

export default SearchFeed;