import React from "react";
import FooterLogin from "./FooterLogin";
import LoginForm from "./LoginInterceptor";

const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-[400px]">
      <div className="flex m-auto gap-36 p-10">
        <LoginForm />
        <FooterLogin />
      </div>
    </div>
  );
};

export default Login;
