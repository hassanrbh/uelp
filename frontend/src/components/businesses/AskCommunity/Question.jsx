import React from "react";

const Question = ({question}) => {
  return (
    <div className="font-bold flex text-base justify-between mt-1">
      <div className="flex">
        <span className="min-w-[30px] mt-3">Q: </span>
        <p className="mt-3">{question?.question}</p>
      </div>
      <div className="font-normal text-sm text-[rgba(110,112,114,1)]">
        {question?.created_at} ago
      </div>
    </div>
  );
};

export default Question;
