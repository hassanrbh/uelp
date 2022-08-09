import { React } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ path, children }) => {
  const isError = localStorage.getItem("token");
  if (isError === null) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
