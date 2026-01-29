import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-dvh w-dvw flex flex-col items-center justify-center bg-primary">
      <Link
        to="/"
        className="text-black text-2xl bg-white w-fit absolute top-10 left-10 p-2.5 rounded-full"
      >
        <IoMdArrowRoundBack />
      </Link>
      <Outlet />
    </div>
  );
}
