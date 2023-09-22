// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Admin from "pages/Admin";
import AdminContent from "pages/AdminContent";
import AdminDetailsOther from "pages/AdminDetailsOther";
import AdminDetailsSeries from "pages/AdminDetailsSeries";
import SignIn from "pages/SignIn";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SignIn />} />
      <Route path="/" element={<Admin />} />
      <Route path="/admin-content/:code" element={<AdminContent />} />
      <Route path="/admin-details-series/:code" element={<AdminDetailsSeries />} />
      <Route path="/admin-details-movies/:code" element={<AdminDetailsOther />} />
      <Route path="/admin-details-documentaries/:code" element={<AdminDetailsOther />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
