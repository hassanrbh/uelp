import React from "react";
import Dividor from "../../reusableComponents/Dividor";
import Answers from "./Answers";
import Writer from "./Writer";

const QuestionAns = ({ question, writer }) => {
  return (
    <>
      <div className="font-[400] text-sm">
        {/* <h1 className="text-base font-[600]">{question?.question}</h1> */}
        <Writer question={question} writer={writer} />
        <Answers question={question?.question} />
      </div>
      <Dividor className="w-[800px]" />
    </>
  );
};

export default QuestionAns;
