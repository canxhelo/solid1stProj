import { Route, Routes } from "@solidjs/router";
import HomeScreen from "../screens/Home";
import { lazy } from "solid-js";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/MainLayout";

const LoginScreen = lazy(() => import("../screens/Login"));
const RegisterScreen = lazy(() => import("../screens/Register"));
//lazy loading import download code when we need it

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" component={MainLayout}>
        <Route path="" component={HomeScreen} />
      </Route>

      <Route path="/auth" component={AuthLayout}>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
