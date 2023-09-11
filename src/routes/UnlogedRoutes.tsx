// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import NotFound from "pages/NotFound";

export default function UnloggedRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/registration" element={<SignUp />} />
    </Routes>
  );
}
