import React from "react";
import { Link, useParams } from "react-router-dom";

const AnansweredQuestions = ({ questions }) => {
  const { business } = useParams();

  return questions?.questions?.map((question, index) => (
    <div className="mb-4" key={index}>
      <p className="text-sm font-normal">{question.question}</p>
      <div className="text-[rgba(110,112,114,1)] mt-2 relative bottom-2 flex gap-2">
        <span className="text-xs font-light">Asked by</span>
        <Link to={`/user_details?username=${question?.questioner?.username}`} className="hover:underline text-xs font-bold text-[rgba(2,122,151,1)]">
          {question?.questioner?.username}
        </Link>
        <span className="text-xs font-light">{question?.created_at} ago</span>
      </div>
      <Link
        to={`/questions/${business}/${question.question}`}
        className="border font-medium border-[#c8c9ca] relative bottom-2 px-[8px] text-xs py-[2px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
      >
        Answer
      </Link>
    </div>
  ));
};

export default AnansweredQuestions;
