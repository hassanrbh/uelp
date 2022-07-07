import React from "react";
import FooterRegister from "./FooterRegister";
import RegisterContent from "./RegisterContent";

const RegisterForm = ({setIsToggle, toggle}) => {
  return (
    <div>
      <FooterRegister setIsToggle={setIsToggle} toggle={toggle}  />
      <RegisterContent />
    </div>
  );
};

export default RegisterForm;
