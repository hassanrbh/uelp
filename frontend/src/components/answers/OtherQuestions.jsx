import React from 'react';
import client from '../../services/react-query.js';
import { useParams, Link } from 'react-router-dom';
import Devidor from '../reusableComponents/Dividor';

const OtherQuestions = () => {
  const { business } = useParams();
  const ques = ['questions_no_answered', business];
  const other_questions = client.getQueryData(ques);
  return (
    <div className="ml-[70px] relative right-[42px] font-bold text-xl">
      Other questions for Urban Griddle
      <Devidor />
      <div>
        {other_questions?.questions?.map((question, __idx__) => (
          <div className="text-sm font-normal mb-3">
            <p>{question?.question}</p>
            <div className="flex text-sm mt-1 mb-2">
              <p>
                Asked by{' '}
                <span className="text-[rgba(2,122,151,1)]">
                  {question?.questioner?.username}
                </span>
              </p>
              <p className="separator">{question.created_at}</p>
            </div>
            <Link
              to=""
              className=" border border-[#c8c9ca] px-[11px] py-[2px] rounded text-black hover:bg-gray-200 ease-in-out"
            >
              Answer
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherQuestions;
