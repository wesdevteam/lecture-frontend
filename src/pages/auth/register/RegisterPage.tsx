import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import CustomInput from "../../../components/input/CustomInput";

export default function RegisterPage() {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <nav className="bg-white w-fit absolute top-10 left-10 p-2.5 rounded-full">
        <Link to="/" className="text-black text-2xl">
          <IoMdArrowRoundBack />
        </Link>
      </nav>

      <form className="bg-white px-12.5 py-12.5 rounded-sm flex flex-col gap-5 items-center justify-center">
        <h1 className="font-bold text-2xl">Register</h1>

        <CustomInput label="Name" />
        <CustomInput label="Email" type="email" />
        <CustomInput label="Password" type="password" />

        <button
          type="submit"
          className="text-white bg-primary px-5 py-2.5 rounded-sm cursor-pointer"
        >
          Register
        </button>

        <Link to="/auth/login" className="text-secondary">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
}
