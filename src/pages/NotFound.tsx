import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="content">
        <h1>
          ❌<br />
          Page not found
        </h1>
        <p>
          We could not found your requested page. Check your link and try again.
        </p>
        <Link to="/" className="button primary">
          Go back home
        </Link>
      </div>
    </div>
  );
}
