import React, { useState } from 'react';
import Loadmore from './loadmore';
import { Link } from 'react-router-dom';

const Answers = ({ answer, question }) => {
  const [more, isMore] = useState(false);
  return (
    <>
      <div className="font-[400] flex text-base mt-3">
        <span className="min-w-[30px] font-bold max-w-[797px]">A: </span>
        <p className="max-w-[797px]">
          {answer?.answer.length >= 350 ? (
            <div>
              <p>
                {answer.answer.slice(0, 350)}
                {more ? answer.answer.slice(350, -1) : '...'}{' '}
                {more ? (
                  <span
                    onClick={() => isMore((prev) => !prev)}
                    className="font-bold text-[rgba(2,122,151,1)] hover:underline cursor-pointer"
                  >
                    less
                  </span>
                ) : (
                  <span
                    onClick={() => isMore((prev) => !prev)}
                    className="font-bold text-[rgba(2,122,151,1)] hover:underline cursor-pointer"
                  >
                    more
                  </span>
                )}
              </p>
            </div>
          ) : (
            <p>{answer?.answer}</p>
          )}
        </p>
      </div>
      <div className="font-normal mt-1 text-sm  text-[rgba(110,112,114,1)] gap-x-2 flex ml-[10px] relative left-[22px]">
        <Link
          to={`/user_details?username=${answer?.answerer?.username}`}
          className="font-semibold text-[rgba(2,122,151,1)] hover:underline"
        >
          {answer?.answerer?.username?.charAt(0).toUpperCase()}
          {answer.answerer.username?.slice(1)}.
        </Link>
        <p>{answer?.created_at} ago</p>
        <p>4 people found this helpful</p>
      </div>
      <div className="mt-2">
        {question?.answers?.length >= 1 ? (
          <>
            <Loadmore
              count={question?.answers?.length}
              question={question?.question}
              answer={question?.answers}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Answers;
