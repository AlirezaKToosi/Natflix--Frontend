// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Content from "pages/Content";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import VideoPlayer from "pages/VideoPlayer";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Home />} />
      <Route path="/content/:code" element={<Content />} />
      <Route path="/video/:code" element={<VideoPlayer />} />
    </Routes>
  );
}
