import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./layouts/auth/AuthLayout";
import HomeLayout from "./layouts/home/HomeLayout";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import LandingPage from "./pages/general/LandingPage";
import HomePage from "./pages/home/HomePage";

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
    {
      path: "/home",
      Component: HomeLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
