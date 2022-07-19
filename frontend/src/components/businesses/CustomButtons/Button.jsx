import React from "react";
import { Link } from "react-router-dom";

const Button = ({ route, name, icon }) => {
  return (
    <Link
      to={route}
      className="flex bg-[#e00706] px-[16px] py-[7px] rounded text-white"
    >
      {icon}
      <p className="font-medium">{name}</p>
    </Link>
  );
};

export default Button;
