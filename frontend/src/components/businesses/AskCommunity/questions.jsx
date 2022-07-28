import React from "react";
import { useQuery } from "react-query";
import questionService from "../../../services/questions.service";
import QuestionsSkeleton from "./questionsSkeleton";
import Loadmore from "./loadmore"

const Questions = ({ business_slug }) => {
  const {
    data: questions,
    isLoading,
  } = useQuery(["questions_for", business_slug], () =>
    questionService.getAll(business_slug, 2)
  );

  return !isLoading ? (
    <div>
      {questions?.questions?.length === 0 ? (
        <div className="font-normal text-[17px] mr-4">
          Yelp users haven’t asked any questions yet about{" "}
          <span className="font-bold">{business_slug}</span>.
        </div>
      ) : (
        <div>
          {questions?.questions.map((question, __idx__) => (
            <div className="m-2" key={__idx__}>
              <div className="font-bold flex text-base justify-between">
                <div className="flex">
                  <span className="min-w-[30px]">Q: </span>
                  <p>{question?.question}</p>
                </div>
                <div className="font-normal text-sm text-[rgba(110,112,114,1)]">
                  {question?.created_at} ago
                </div>
              </div>
              <div>
                {question?.answers?.map((answer, __idxans__) => (
                  <>
                    <div className="font-[400] flex text-base mt-3">
                      <span className="min-w-[30px] font-bold">A: </span>
                      <p>{answer?.answer}</p>
                    </div>
                    <div className="font-normal mt-1 text-sm text-[rgba(110,112,114,1)] gap-x-2 flex ml-[10px] relative left-[22px]">
                      <h2 className="font-semibold">{
                      answer?.answerer?.username?.charAt(0).toUpperCase()}{answer.answerer.username?.slice(1)
                      }.</h2>
                      <p>{answer?.created_at} ago</p>
                      <p>4 people found this helpful</p>
                    </div>
                    <div className="mt-2">
                      {
                        (question?.answers?.length === 1) ? (
                          <>
                            <Loadmore count={question?.answers?.length} question={question?.question}/>
                          </>
                        ) : null
                      }
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <QuestionsSkeleton />
  );
};

export default Questions;
