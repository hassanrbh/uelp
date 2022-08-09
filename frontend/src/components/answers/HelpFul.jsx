import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { useParams, Link } from 'react-router-dom';
import { FlagIcon } from '@heroicons/react/outline';
import AnswerContent from './AnswerContent';
import Modal from '../reusableComponents/Modal';
import 'tippy.js/dist/tippy.css';
import Like from './Like';
import UnLike from './UnLike';
import 'tippy.js/animations/scale.css';
import { useMutation } from 'react-query';
import { useQuery } from 'react-query';
import helpfulService from '../../services/helpful.service.js';

const HelpFul = ({ answer, question_id }) => {
  const { business } = useParams();
  const [switcher, setSwitcher] = useState(false);
  const { data, isLoading, refetch } = useQuery(
    ['active_helpfuls_for', answer?.answer],
    () => helpfulService.all(business, question_id, answer?.answer)
  );

  const { mutate } = useMutation(
    (unhelpful) =>
      helpfulService.unhelpful(
        business,
        question_id,
        answer?.answer,
        unhelpful
      ),
    {
      onSuccess: function (data) {
        refetch();
      }
    }
  );

  const handleUnLike = () => {
    mutate({
      help_fuls: {
        indicator: -1
      }
    });
  };

  return (
    <div className="mt-2 flex justify-between">
      <div className="flex gap-1">
        <Like
          data={data}
          answer={answer?.answer}
          isLoading={isLoading}
          question_id={question_id}
          refetch={refetch}
        />

        <button
          onClick={handleUnLike}
          className="flex border border-[#c8c9ca] px-[16px] py-[6px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-max"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          <p className="font-[500] text-xs">Not Helpful</p>
        </button>
      </div>
      <Tippy
        animation="scale"
        content={<span className="font-bold">Report answer</span>}
        interactive={true}
      >
        <button
          onClick={() => setSwitcher((prev) => !prev)}
          className=" border relative top-[3px] border-[#c8c9ca] p-[7px] 
          rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
        >
          <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
        </button>
      </Tippy>
      {switcher ? (
        <Modal
          setSwitcher={setSwitcher}
          component={<AnswerContent answer={answer} />}
          component_name={
            <span className="font-bold text-2xl">Report Answer</span>
          }
        />
      ) : null}
    </div>
  );
};

export default HelpFul;
