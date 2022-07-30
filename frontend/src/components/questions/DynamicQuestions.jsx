import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import questionService from "../../services/questions.service.js";

const DynamicQuestions = ({ currentItem }) => {
  const { business } = useParams();
  const [currentPos, setCurrentPos] = useState(1);
  const { 
    data, 
    isSuccess, 
    isLoading 
  } = useQuery(
    [`${currentItem}_questions_for`, business],
    () => questionService.getSortedData(business, currentItem, currentPos)
  );

  return isSuccess ? (
    <>
      {JSON.stringify(data)}
    </>
  ) : null;
};

export default DynamicQuestions;
