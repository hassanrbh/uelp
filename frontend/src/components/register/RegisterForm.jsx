import React from "react";
import FooterLogin from "../login/FooterLogin";
import FooterRegister from "./FooterRegister";
import RegisterContent from "./RegisterContent";

const RegisterForm = ({setIsToggle, toggle}) => {
  return (
    <>
      <FooterRegister setIsToggle={setIsToggle} toggle={toggle}  />
      <RegisterContent />
    </>
  );
};

export default RegisterForm;
