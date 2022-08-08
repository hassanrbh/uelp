import { React } from 'react';
import { Navigate } from "react-router-dom";
import client from "../services/react-query";

const ProtectedRoute = ({ path,children}) => {
  const isError = client.getQueryData(["currentUser"])?.errors;

  console.log(isError)

  if (isError) {
    return <Navigate to={path ? "/" + path : "/login" } />;
  }
  return children;
};

export default ProtectedRoute;