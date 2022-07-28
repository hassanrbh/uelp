import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import client from "../../../services/react-query";
import Questions from "./questions";
import Dividor from "../../reusableComponents/Dividor";

const AskCommunity = () => {
  const business_slug = client.getQueryData(["unit-business"]).profile
    .private_details.name;
  const questions_count = client.getQueryData(["questions_for",business_slug])?.questions?.length;

  return (
    <>
      <div className="mb-3">
        <div className="flex justify-between">
          <h1 className="font-bold mb-4 text-[1.25rem]">Ask the Community</h1>
          <Link
            to={`/questions`}
            className="flex font-bold hover:underline cursor-pointer"
          >
            <p className="mr-1">Ask a question</p>
            <PlusIcon
              width={24}
              height={24}
              className="font-bold cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Questions business_slug={business_slug} />
        </div>
        <div className="mt-7">
          <button className="border font-medium border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700">
            See all {questions_count} questions
          </button>
        </div>
      </div>
      <Dividor />
    </>
  );
};

export default AskCommunity;
