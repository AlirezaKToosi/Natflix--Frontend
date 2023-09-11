// Fake fetch
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// Project files
import ListInput from "components/ListInput";
import Fields from "data/fields-sign-in.json";
import { useUser } from "state/UserContext";
import iUser from "types/iUser";

export default function Login() {
  // Global state
  const { user, setUser } = useUser();

  // Local state
  const [form, setForm] = useState({ email: "", password: "" });

  // Properties
  const endPoint = "login/";

  // Methods
  function onSubmit(event: FormEvent): void {
    event.preventDefault();

    fakeFetch(endPoint, form)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }

  function onSuccess(returningUser: iUser) {
    console.log(returningUser);
    setUser(returningUser);
  }

  function onFailure(error: string) {
    console.error(error);
    alert(error);
  }

  return (
    <div id="sign-in" className="auth">
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={(event) => onSubmit(event)}>
          <ListInput fields={Fields} state={[form, setForm]} />
          <button className="primary">Sign in</button>
        </form>
        <footer>
          <p>
            New to Natflix? <Link to="/registration">Sign up now</Link>
          </p>
        </footer>
      </div>
      <div className="warning">
        <h2>⚠️ Note:</h2>
        <p>
          To login as a <b>Customer</b> use <code>customer@gmail.com</code> with
          password <code>customer</code>
        </p>
        <p>
          To login as an <b>Admin</b> use <code>admin@gmail.com</code> with
          password <code>admin</code>
        </p>
      </div>
    </div>
  );
}
