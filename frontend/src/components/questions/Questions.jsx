import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Divider from "../reusableComponents/Dividor";

const Questions = (props) => {
  const { business } = useParams();

  return (
    <>
      <Divider />
      <div className="container mx-auto max-w-[1140px]">
        <div className="flex">
          <Link
            to={`/biz/${business}`}
            className="hover:underline font-semibold text-sm text-gray-600 relative bottom-2"
          >
            {business}
          </Link>
          <ChevronRightIcon className="h-4 relative bottom-[5px] mr-1 ml-1 w-5 font-bold text-gray-600" />
          <p className="font-semibold text-sm text-gray-600 relative bottom-2 ">
            Ask the Community
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <RightSection />
          </div>
          <div>
            <LeftSection business={business}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
