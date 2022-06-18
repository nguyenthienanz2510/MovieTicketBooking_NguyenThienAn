import Layout from "../HOC/Layout";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const userRoutes = [
  {
    path: "/",
    component: <Layout Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/detail/:id",
    component: <Layout Component={DetailPage} />,
    isUseLayout: true,
  },
];
