import React from 'react';
import Writer from './Writer';
import HelpFul from './HelpFul';
import Dividor from '../reusableComponents/Dividor';

const Answer = ({
  activeMenuItem,
  question_id,
  refetch,
  isSuccess,
  isLoading,
  answers
}) => {
  return !isLoading ? (
    <div>
      {answers?.map((answer, __idx__) => (
        <>
          <Writer writer={answer?.writer} created_at={answer?.created_at} />
          <div className="font-normal mt-4 text-base text-[rgba(45,46,47,1)]">
            {answer?.answer}
          </div>
          <HelpFul
            answer={answer}
            refetch={refetch}
            question_id={question_id}
          />
          <Dividor />
        </>
      ))}
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Answer;
