import React from "react";
import { Link } from "react-router-dom";

const QuestionsUna = ({question, className}) => {
  return (
    <div className={`${className} font-normal mt-1 text-sm text-[rgba(110,112,114,1)]`}>
      <p>
        Asked by{" "}
        <Link
          to={`/user_details?username=${question?.questioner?.username}`}
          className="text-[rgba(2,122,151,1)] font-semibold  hover:underline"
        >
          {question?.questioner?.username}
        </Link>
      </p>
      <span className="relative top-[10px] text-gray-700">
        No answers yet.
        <Link to="/" className="ml-1 font-semibold text-[rgba(2,122,151,1)]">
          Answer this question
        </Link>
      </span>
    </div>
  );
};

export default QuestionsUna;
