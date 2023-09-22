// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import eUserType from "interfaces/eUserType";
import AdminRoutes from "routes/AdminRoutes";
import CustomerRoutes from "routes/CustomerRoutes";
import UnloggedRoutes from "routes/UnlogedRoutes";
import { useUser } from "state/UserContext";
import "styles/style.css";

export default function App() {
  // Global state
  const { user } = useUser();

  return (
    <div className="App">
      <BrowserRouter>
        {user === null && <UnloggedRoutes />}
        {user?.type === eUserType.ADMIN && <AdminRoutes />}
        {user?.type === eUserType.CUSTOMER && <CustomerRoutes />}
        {/* To handle the modal/popups of the website */}
        <Modal />
      </BrowserRouter>
    </div>
  );
}
