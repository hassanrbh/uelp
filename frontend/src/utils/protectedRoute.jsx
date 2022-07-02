import { React } from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ path,children }) => {
  const isLoggedIn = Boolean(window.localStorage.getItem('token'));
  if (!isLoggedIn) {
    return <Navigate to={path ? "/" + path : "/login" } />;
  }
  return children;
};

export default ProtectedRoute;