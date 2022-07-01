import React from "react";
import OmniAuth from "./OmniAuth";

const AllOmniAuth = () => {
  return (
    <div className="flex flex-col">
      <OmniAuth
        service="facebook"
        className="
            text-white 
            bg-[#1877f2]
            border-[#1877f2] 
            flex p-2 rounded mb-3 justify-center"
      />
      <OmniAuth
        service="google"
        className="text-white
              bg-red-500
              border-gray-400 
              flex p-2 rounded mb-3 justify-center"
      />
      <OmniAuth
        service="github"
        className="text-white
            bg-black
            border-black
            flex p-2 rounded mb-3 justify-center"
      />
    </div>
  );
};

export default AllOmniAuth;
