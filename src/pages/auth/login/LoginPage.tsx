import { Link } from "react-router-dom";
import CustomInput from "../../../components/input/CustomInput";

export default function LoginPage() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <form className="bg-white px-12.5 py-12.5 rounded-sm flex flex-col gap-5 items-center justify-center">
        <h1 className="font-bold text-2xl">Login</h1>

        <CustomInput label="Email" type="email" />
        <CustomInput label="Password" type="password" />

        <button
          type="submit"
          className="text-white bg-primary px-5 py-2.5 rounded-sm cursor-pointer"
        >
          Login
        </button>

        <Link to="/auth/register" className="text-secondary">
          Don't have an account? Register here
        </Link>
      </form>
    </div>
  );
}
