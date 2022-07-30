import React from "react";
import Loadmore from "./loadmore";
import { Link } from "react-router-dom";

const Answers = ({ answer, question }) => {
  return (
    <>
      <div className="font-[400] flex text-base mt-3">
        <span className="min-w-[30px] font-bold">A: </span>
        <p>{answer?.answer}</p>
      </div>
      <div className="font-normal mt-1 text-sm  text-[rgba(110,112,114,1)] gap-x-2 flex ml-[10px] relative left-[22px]">
        <Link to={`/user_details?username=${answer?.answerer?.username}`} className="font-semibold text-[rgba(2,122,151,1)] hover:underline">
          {answer?.answerer?.username?.charAt(0).toUpperCase()}
          {answer.answerer.username?.slice(1)}.
        </Link>
        <p>{answer?.created_at} ago</p>
        <p>4 people found this helpful</p>
      </div>
      <div className="mt-2">
        {question?.answers?.length === 1 ? (
          <>
            <Loadmore
              count={question?.answers?.length}
              question={question?.question}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Answers;
