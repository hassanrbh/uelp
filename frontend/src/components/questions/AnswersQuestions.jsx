import React from 'react'
import { useParams } from "react-router-dom";

const AnswersQuestions = () => {

  const { question } = useParams();

  return (
    <div>{question}</div>
  )
}

export default AnswersQuestions