import React from "react";
import { useParams } from "react-router-dom";

const Questions = () => {
  const { question } = useParams();

  return <div>
    {question}
  </div>;
};

export default Questions;
