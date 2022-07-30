import React from "react";
import { useQuery } from "react-query";
import questionService from "../../../services/questions.service";
import QuestionsSkeleton from "./questionsSkeleton";
import Answers from "./Answers";
import Question from "./Question";
import { Link } from "react-router-dom";

const Questions = ({ business_slug }) => {
  const { data: questions, isLoading } = useQuery(
    ["questions_for", business_slug],
    () => questionService.getAll(business_slug, 2)
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
              <Question question={question} />
              <div>
                {question?.answers?.length >= 1 ? (
                  <div>
                    {question?.answers?.map((answer, __idxans__) => (
                      <Answers
                        key={__idxans__}
                        question={question}
                        answer={answer}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="m-2 relative left-[22px] font-normal mt-1 text-sm text-[rgba(110,112,114,1)]">
                    <p>
                      Asked by{" "}
                      <Link to={`/user_details?username=${question?.questioner?.username}`} className="text-[rgba(2,122,151,1)] font-semibold  hover:underline">
                        {question?.questioner?.username}
                      </Link>
                    </p>
                    <span className="relative top-[10px] text-gray-700">
                      No answers yet.
                      <Link to="/" className="ml-1 font-semibold text-[rgba(2,122,151,1)]">
                        Answer this question
                      </Link>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {questions?.questions?.length >= 1 ? (
          <div className="mt-7">
            <Link
              to={`/questions/${business_slug}/`}
              className="border font-medium border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
            >
              See all {questions?.questions?.length} questions
            </Link>
          </div>
        ) : (
          <div className="mt-7">
            <Link
              to={`/questions/${business_slug}/`}
              className="border font-medium border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
            >
              See all questions
            </Link>
          </div>
        )}
        </div>
      )}
    </div>
  ) : (
    <QuestionsSkeleton />
  );
};

export default Questions;
