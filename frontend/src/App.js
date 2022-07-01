import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import HeaderLogin from "./components/login/HeaderLogin";
import { switchHeaders } from "./utils/switchHeader";
import { useState, useEffect } from "react";
import UserService from "./services/auth.service";
import AuthService from "./services/user.service";
import Error from "./components/errors/Error";
import Register from "./components/register/Register";
import ProtectedRoute from "./utils/protectedRoute";
import Yelper from "./components/profile/Yelper";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let location = useLocation();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserService.getUser();
      setCurrentUser(user);
      setIsLoggedIn(true);
    };
    fetchUser();
  }, []);

  const logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="App">
      {switchHeaders(
        "/login",
        HeaderLogin,
        location,
        Header,
        currentUser,
        logout
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user_details" element={<Yelper />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default App;
