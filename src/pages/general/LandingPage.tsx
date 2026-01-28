import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="h-dvh w-dvw flex flex-col items-center justify-center gap-2">
      <h1 className="text-xl font-bold">Landing Page</h1>
      <nav className="flex gap-2">
        <Link to="/auth/register" className="text-green-500">
          Register
        </Link>
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </nav>
    </div>
  );
}
