import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="h-dvh w-dvw flex flex-col items-center justify-center gap-7.5 bg-primary">
      <h1 className="text-8xl text-white">Landing Page</h1>
      <nav className="flex gap-2">
        <Link
          to="/auth/register"
          className="text-white bg-secondary py-2.5 px-5 rounded-sm"
        >
          Register
        </Link>
        <Link
          to="/auth/login"
          className="text-white bg-secondary py-2.5 px-5 rounded-sm w-28.5 text-center"
        >
          Login
        </Link>
      </nav>
    </div>
  );
}
