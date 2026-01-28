import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <nav>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/login">Login</Link>
      </nav>
    </div>
  );
}
