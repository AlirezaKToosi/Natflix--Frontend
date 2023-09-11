// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Media from "pages/Media";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import VideoPlayer from "pages/VideoPlayer";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/media/:code" element={<Media />} />
      <Route path="/video/:code" element={<VideoPlayer />} />
    </Routes>
  );
}
