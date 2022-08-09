import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import answerService from '../../services/answers.service.js';
import Writer from './Writer';
import HelpFul from './HelpFul';

const Answer = ({
  activeMenuItem,
  question_id,
  refetch,
  isSuccess,
  isLoading,
  answers
}) => {
  console.log(answers);
  return !isLoading ? (
    <div>
      {answers?.map((answer, __idx__) => (
        <>
          <Writer writer={answer?.writer} created_at={answer?.created_at} />
          <div className="font-normal ">{answer?.answer}</div>
          <HelpFul />
        </>
      ))}
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Answer;
