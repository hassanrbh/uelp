import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeftSectionSeketon = () => {
  const loop = Array(3).fill(0);

  return loop.map((item) => (
    <div>
      <Skeleton count={1} width={200}/>
      <Skeleton count={1} width={120}/>
      <Skeleton count={1} width={70}/>
    </div>
  ))
}

export default LeftSectionSeketon