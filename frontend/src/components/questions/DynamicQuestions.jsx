import React, { useState } from "react";
// import Pagination from "@mui/material/Pagination";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import questionService from "../../services/questions.service.js";
import DynamicQuestionsSkeleton from "./DynamicQuestionsSkeleton"
import Question from "./Question";
import { useAutoAnimate } from '@formkit/auto-animate/react'
// import PaginationItem from '@mui/material/PaginationItem';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DynamicQuestions = ({ currentItem }) => {
  const [parent] = useAutoAnimate({
    easing: "ease-in-out",
    duration: "250"
  })
  const { business } = useParams();
  const [currentPos, setCurrentPos] = useState(1); 
  const { data: questions, isLoading } = useQuery(
    [`${currentItem}_questions_for`, business],
    () => questionService.getSortedData(business, currentItem, currentPos), {
      refetchInterval: 3000,
    }
  );

  // const handleDirection = (e) => {
  //   if (e.target.type === "button") {
  //     console.log(e.target.textContent)
  //     return ;
  //   }

  //   if (e.target.dataset.testid === "ArrowForwardIcon") {
  //     console.log("hello arrow forware icon")
  //     return ;
  //   }
  //   console.log("hello arrow backward icon")
  // }

  return !isLoading ? (
    <div ref={parent}>
      {questions?.questions?.map((question, __idx__) => (
        <Question
          question={question?.question}
          writer={question?.questioner?.username}
          answers={question?.answers}
          key={__idx__}
        />
      ))}
      {/* <Pagination count={questions?.total_pages} 
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon , next: ArrowForwardIcon }}
            {...item}
          />
        )}
        onClick={(e) => handleDirection(e)}/> */}
    </div>
  ) : <DynamicQuestionsSkeleton />;
};

export default DynamicQuestions;
