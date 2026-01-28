import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div>
      <nav>
        <Link to="/">Back</Link>
      </nav>
      <h1>Register Page</h1>
      <nav>
        <Link to="/auth/login">Login</Link>
      </nav>
    </div>
  );
}
