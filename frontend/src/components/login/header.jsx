import React from "react";
import { Link } from "react-router-dom";
import AllOmniAuth from "./allOmniAuth";
import OmniAuth from "./OmniAuth";
import OrLineUp from "./OrLineUp";
import Or_line_up from "./OrLineUp";

const Header = () => {
  return (
    <div className="mt-[117px] text-center">
      <h1 className="text-red-600 font-bold text-2xl">Log in to Uelp</h1>
      <h2 className="font-bold text-sm">
        New to Yelp?
        <Link to="/register" className="text-blue-400 font-semibold pl-1">
          Sign up
        </Link>
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
