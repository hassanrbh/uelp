import React from 'react';
import { useQuery } from 'react-query';
import questionService from '../../../services/questions.service';
import QuestionsSkeleton from './questionsSkeleton';
import Answers from './Answers';
import Question from './Question';
import { Link } from 'react-router-dom';
import QuestionUna from './QuestionsUna';

const Questions = ({ business_slug }) => {
  const { data: questions, isLoading } = useQuery(
    ['questions_for', business_slug],
    () => questionService.getAll(business_slug, 2)
  );

  return !isLoading ? (
    <div>
      {questions?.questions?.length === 0 ? (
        <div className="font-normal text-[17px] mr-4">
          Yelp users haven’t asked any questions yet about{' '}
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
                    {question?.answers
                      .slice(0, 1)
                      ?.map((answer, __idxans__) => (
                        <Answers
                          key={__idxans__}
                          question={question}
                          answer={answer}
                        />
                      ))}
                  </div>
                ) : (
                  <QuestionUna
                    question={question}
                    className={'relative left-[22px] m-2 '}
                  />
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
                See {questions?.questions?.length} questions
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
