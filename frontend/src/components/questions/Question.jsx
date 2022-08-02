import React from "react";
import QuestionAnswered from "./switcher/QuestionAnswered";
import QuestionAns from "./switcher/QuestionAns";

const Question = ({ question, writer, answers }) => {
  return answers.length >= 0 ? (
    <QuestionAnswered
      question={question}
      answers={answers}
      writer={writer}
    />
  ) : (
    <QuestionAns question={question} writer={writer} />
  );
};

export default Question;
