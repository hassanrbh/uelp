import React from "react";
import Divider from "../reusableComponents/Dividor";
import { useQuery } from "react-query";
import questionService from "../../services/questions.service.js";
import AnansweredQuestions from "./AnansweredQuestions";

const LeftSection = ({ business }) => {
  const {
    data: questions,

    isLoading,
  } = useQuery(["questions_no_answered", business], () =>
    questionService.getAnansweredQuestions(business)
  );


  return (
    <div className="font-bold text-xl sticky top-[10px]">
      <h1>Can you answer these questions?</h1>
      <Divider />
      {!isLoading && questions?.questions?.length >= 1 ? (
        <AnansweredQuestions questions={questions} />
      ) : (
        <p className="font-[400px] text-sm text-[rgba(2,122,151,1)]">
          No More Questions To reply :)
        </p>
      )}
    </div>
  );
};

export default LeftSection;
