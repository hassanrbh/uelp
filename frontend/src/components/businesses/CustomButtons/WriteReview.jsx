 import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/outline"

const WriteReview = () => {
  return <Link to="/writereview" className="flex bg-[#e00706] px-[16px] py-[7px] rounded text-white">
    <StarIcon className="h-6 w-6 mr-[6px]"/>
    <p className="font-medium">Write a review</p>
  </Link>
};

export default WriteReview;
