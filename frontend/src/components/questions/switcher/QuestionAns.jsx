import React from "react";
import Dividor from "../../reusableComponents/Dividor";
import Answers from "./Answers"
import Writer from "./Writer"

const QuestionAns = ({ question, writer }) => {
  return (
    <>
      <div className="font-[400] text-sm">
        <Writer question={question} writer={writer} />
        <Answers question={question}/>
      </div>
      <Dividor className="w-[800px]" />
    </>
  );
};

export default QuestionAns;
