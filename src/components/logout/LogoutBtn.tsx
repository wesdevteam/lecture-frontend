import { useAuthStore } from "@/stores/auth/auth.store";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const { loading, logout } = useAuthStore();

  const navigate = useNavigate();

  const submitLogout = async () => {
    const success = await logout();
    if (success) navigate("/auth/login");
  };

  return (
    <button
      className="bg-red-700 text-white rounded-sm px-3 py-2"
      onClick={submitLogout}
    >
      {loading ? "Loading..." : "Logout"}
    </button>
  );
}
