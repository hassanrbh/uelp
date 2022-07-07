import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllOmniAuth from "./allOmniAuth";
import OrLineUp from "./OrLineUp";

const Header = ({seToggle, toggle}) => {
  return (
    <div className="mt-[117px] text-center">
      <h1 className="text-red-600 font-bold text-2xl">Log in to Uelp</h1>
      <h2 className="font-bold text-sm">
        New to Yelp?
        <button onClick={() => seToggle(!toggle)} className="text-blue-400 font-semibold pl-1"> 
          Sign Up
        </button>
      </h2>
      <p className="text-sm p-1 mb-3">
        By logging in, you agree to Uelp's
        <Link to="/terms-of-service">
          <span className="text-blue-700 text-xs p-1">Terms of Service</span>
        </Link>
        <br />
        <Link to="/privacy-policy">
          and
          <span className="text-blue-700 text-xs pl-1">Privacy Policy</span>
        </Link>
      </p>
      <AllOmniAuth />
      <OrLineUp />
    </div>
  );
};

export default Header;
