import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PopularDishesSkeleton = ({ cards }) => {
  const loop = Array(cards).fill(0);

  return (
    <>
      <div className="flex justify-between">
        <Skeleton count={1}/>
        <Skeleton count={1}/>
      </div>
      <div className="flex gap-5">
        {loop.map((_, __idx__) => (
          <div key={__idx__} className="">
            <Skeleton width={195} height={150} enableAnimation={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularDishesSkeleton;
