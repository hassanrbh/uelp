import React, { useState } from "react";
import LeftNav from "./left_nav";
import RightNavVist from "./RightNavVist";
import RightNav from "./right_nav";
import Search from "./search";

const Header = ({ user, logout }) => {
  return (
    <div className="mx-auto m-4">
      <div className="flex justify-between">
        <LeftNav className="w-15 h-9 pr-5 relative left-8" />
        <Search />
        {user?.errors ? (
          <RightNavVist />
        ) : (
          <RightNav username={user?.username} logout={logout} />
        )}
      </div>
    </div>
  );
};

export default Header;
