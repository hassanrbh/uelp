import React, { useState } from "react";
import Register from "../register/Register";
import FooterLogin from "./FooterLogin";
import LoginInterceptor from "./LoginInterceptor";

const Login = () => {
  const [toggle, setIsToggle] = useState(false);

  return (
    <div className="container mx-auto flex justify-center items-center h-[400px]">
      <div className="flex m-auto gap-36 p-10">
        {!toggle ? (
          <>
            <LoginInterceptor seToggle={setIsToggle} toggle={toggle}/>
            <FooterLogin />
          </>
        ) : (
          <>
            <Register />
            <FooterLogin />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
