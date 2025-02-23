import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { pathRoutes } from "./pathRoutes";
import { isAuthenticated } from "../../utils/auth";

const PublicRoute: React.FC = () => {
  const isAuth = isAuthenticated();

  return !isAuth ? <Outlet /> : <Navigate to={pathRoutes.main} />;
};

export default PublicRoute;
