import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <nav>
        <Link to="/">Back</Link>
      </nav>
      <h1>Login Page</h1>
      <nav>
        <Link to="/auth/register">Register</Link>
      </nav>
    </div>
  );
}
