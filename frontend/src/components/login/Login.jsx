import React, { useState } from "react";
import Register from "../register/Register";
import FooterLogin from "./FooterLogin";
import LoginInterceptor from "./LoginInterceptor";

const Login = () => {
  const [toggle, setIsToggle] = useState(false);

  return (
    <div className="container mx-auto flex justify-center items-center h-[400px]">
        {!toggle ? (
          <>
            <div className="flex m-auto gap-36 p-10">
              <LoginInterceptor seToggle={setIsToggle} toggle={toggle}/>
              <FooterLogin />
            </div>
          </>
        ) : (
          <>
            <div className="flex m-auto gap-36 p-10">
              <Register setIsToggle={setIsToggle} toggle={toggle} />
              <FooterLogin />
            </div>
          </>
        )}
    </div>
  );
};

export default Login;
