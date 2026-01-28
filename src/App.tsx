import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./layouts/auth/AuthLayout";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import LandingPage from "./pages/general/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: LandingPage,
    },
    {
      path: "/auth",
      Component: AuthLayout,
      children: [
        {
          path: "/auth/register",
          Component: RegisterPage,
        },
        {
          path: "/auth/login",
          Component: LoginPage,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
