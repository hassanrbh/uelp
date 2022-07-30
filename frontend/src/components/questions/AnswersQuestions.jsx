import React from 'react'
import { useParams } from "react-router-dom";

const AnswersQuestions = () => {

  const { question, business } = useParams();

  return (
    <div>{question}{business}</div>
  )
}

export default AnswersQuestions