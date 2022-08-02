import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Divider from "../reusableComponents/Dividor"
import Discussions from "./Discussions"
import OtherQuestions from "./OtherQuestions"

const Answers = () => {
  const { business , question} = useParams();

  return (
    <>
      <Divider />
      <div className="container mx-auto max-w-[1140px]">
        <div className="flex pt-[10px] pb-[10px]">
          <Link
            to={`/biz/${business}`}
            className="hover:underline font-semibold text-[12px] text-gray-500 relative bottom-2"
          >
            {business}
          </Link>
          <ChevronRightIcon className="h-4 relative bottom-[6px] mr-1 ml-1 w-5 font-bold text-gray-600" />
          <Link to={`/questions/${business}`} className="font-semibold text-[12px] text-gray-500 relative bottom-2 hover:underline">
            Ask the Community
          </Link>
          <ChevronRightIcon className="h-4 relative bottom-[6px] mr-1 ml-1 w-5 font-bold text-gray-600" />
          <p className="font-semibold text-[12px] text-gray-500 relative bottom-2">
            {question}
          </p>
        </div>

        <div className="flex">
          <div className="flex-1">
            <Discussions />
          </div>
          <div>
            <OtherQuestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Answers;
