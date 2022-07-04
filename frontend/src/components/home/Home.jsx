import React from "react";
import LatestHotBusinesses from "./latestHotBusinesses"

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-10 container m-auto mt-[60px]">
      <LatestHotBusinesses />
    </div>
  );
};

export default Home;
