import { useAuthStore } from "@/stores/auth/auth.store";
import type { AccountType } from "@/types/account/account.type";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import CustomInput from "../../../components/input/CustomInput";

export default function RegisterPage() {
  const { loading, setRegister } = useAuthStore();

  const [form, setForm] = useState<Partial<AccountType>>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form: ", form);
    const success = await setRegister(form);
    if (success) {
      navigate("/home");
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <form
        onSubmit={submitForm}
        className="bg-white px-9 md:px-12.5 py-12.5 rounded-sm flex flex-col gap-5 items-center justify-center"
      >
        <h1 className="font-bold text-2xl">Register</h1>

        <CustomInput label="Name" name="name" onChange={handleChange} />
        <CustomInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="text-white bg-primary px-5 py-2.5 rounded-sm cursor-pointer"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <Link to="/auth/login" className="text-secondary">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
}
