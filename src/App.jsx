import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchFeed from "./pages/SearchFeed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
    </Routes>
  );
}

export default App;