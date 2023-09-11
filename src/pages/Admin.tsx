// Node modules
import { Link } from "react-router-dom";

// Project files
import NavigationBar from "components/NavigationBarAdmin";
import data from "data/links-admin.json";

export default function Admin() {
  // Components
  const Links = data.map((item) => (
    <Link key={item.id} className="item" to={item.url}>
      <img src={item.imageURL} />
      <h3>{item.label}</h3>
    </Link>
  ));

  return (
    <div id="admin" className="admin-pages">
      <NavigationBar />
      <h1>Admin main menu</h1>
      <p>Please choose one of the following options to start adding content:</p>
      <div className="items">{Links}</div>
    </div>
  );
}
