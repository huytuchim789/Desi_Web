import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authStore";

const PublicRouter = ({ children }) => {
  const { auth, setAuth } = useAuth((state) => state);
  console.log(auth);
  return <>{auth ? <Navigate to="/" /> : children}</>;
};

export default PublicRouter;
