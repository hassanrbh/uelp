import React from "react";
import LatestHotBusinesses from "./latestHotBusinesses"

const Home = () => {
  return (
    <div className="
      grid 2xl:mt-[35px] sm:grid-cols-1 
      md:grid-cols-2 md:gap-x-[10rem]
      md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4 
      xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-2 
      2xl:gap-[1.5rem] 2xl:container 2xl:m-auto sm:max-w-[301px] smm:grid-cols-1 smm:max-w-[301px] xl:mt-[35px] 
      xl:container xl:m-auto lg:grid-rows-4 lg:mt-[35px]
      lg:gap-10 lg:container lg:m-auto md:grid-rows-5
      md:container md:m-auto md:mt-[35px] sm:grid-rows-6
      sm:mt-[50px] sm:gap-10 sm:container sm:m-auto
      smm:grid-rows-7 smm:container smm:m-auto smm:mt-[35px]
      smm:gap-y-[2rem]"
      >
      <LatestHotBusinesses />
    </div>
  );
};

export default Home;
