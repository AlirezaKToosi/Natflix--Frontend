// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";
import data from "data/links-admin.json";
import { useUser } from "state/UserContext";

export default function NavigationBarAdmin() {
  // Global state
  const { setUser } = useUser();

  // Components
  const Links = data.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div className="links">{Links}</div>
      <div className="left-items">
        {/* Search bar goes here... */}
        <button className="button-logout" onClick={() => setUser(null)}>
          Logout
        </button>
      </div>
    </nav>
  );
}
