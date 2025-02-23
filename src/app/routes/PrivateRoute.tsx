import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pathRoutes } from "./pathRoutes";
import { isAuthenticated } from "../../utils/auth";

const PrivateRoute: React.FC = () => {
  const isAuth = isAuthenticated();
  const location = useLocation();

  if (!isAuth) {
    sessionStorage.setItem("redirectAfterLogin", location.pathname);
    return <Navigate to={pathRoutes.login} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
