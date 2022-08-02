import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FlagIcon } from "@heroicons/react/outline";
import { useQuery } from "react-query";
import questionService from "../../services/questions.service.js";

const Discussions = () => {
  const { question, business: business_slug } = useParams();
  const {
    state: { question_id },
  } = useLocation();

  const { data, isLoading } = useQuery([`${question}_question`], () =>
    questionService.getQuestionData({
      question_id,
      business_slug,
    })
  );

  return (
    <>
      <div className="font-bold text-[28px] flex justify-between">
        <div>{question}</div>
        <Link
          to={"/flag_content"}
          className=" border relative top-[3px] border-[#c8c9ca] p-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
        >
          <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
        </Link>
      </div>
      {!isLoading ? (
        <>
          <div className="font-[400] text-[14px] flex text-[rgba(110,112,114,1)]">
            <p>
              Asked by{" "}
              <span className="font-bold text-[rgba(2,122,151,1)]">
                {data?.questioner?.username}
              </span>
            </p>
            <p className="separator">
              {data?.created_at}
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Discussions;
