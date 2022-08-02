import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Dividor from "../reusableComponents/Dividor";

const DynamicQuestionsSkeleton = () => {
  const loop = Array(20).fill(0);

  return loop.map((item) => (
    <div className="mt-4">
      <Dividor />
      <Skeleton count={1} width={250} />
      <Skeleton count={1} width={170} />
      <Dividor />
    </div>
  ));
};

export default DynamicQuestionsSkeleton;
