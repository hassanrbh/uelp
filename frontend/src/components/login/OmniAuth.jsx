import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const OmniAuth = ({ service, className }) => {
  return (
    <button className={className}>
      <div>
        {service === "facebook" ? <FacebookIcon /> : null}
        {service === "github" ? <GitHubIcon /> : null}
        {service === "google" ? <GoogleIcon /> : null}
      </div>
      <div className="text-center pl-2">
        Continue with <span className="capitalize text-center">{service}</span>
      </div>
    </button>
  );
};

export default OmniAuth;
