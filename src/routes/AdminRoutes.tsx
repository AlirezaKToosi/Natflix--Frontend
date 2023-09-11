// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Admin from "pages/Admin";
import AdminMedia from "pages/AdminMedia";
import AdminTVSeries from "pages/AdminTVSeries";
import NotFound from "pages/NotFound";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Admin />} />
      <Route path="/admin-media/:code" element={<AdminMedia />} />
      <Route path="/admin-tv-series/:code" element={<AdminTVSeries />} />
    </Routes>
  );
}
