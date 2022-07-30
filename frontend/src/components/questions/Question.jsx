import React from "react";
import QuestionAnswered from "./switcher/QuestionAnswered"
import QuestionAns from "./switcher/QuestionAns"

const Question = ({ question, writer, answer, answerer, avatar }) => {
  return answer.length >= 1 ? <QuestionAnswered /> : <QuestionAns />
};

export default Question;
