import React from 'react';
import { useMutation } from 'react-query';
import helpfulService from '../../services/helpful.service.js';
import { useParams } from 'react-router-dom';

const Like = ({ data, isLoading, question_id, answer, refetch }) => {
  const { business } = useParams();

  const { mutate } = useMutation(
    (helpful) => helpfulService.helpful(business, question_id, answer, helpful),
    {
      onSuccess: function (data) {
        refetch();
      }
    }
  );

  const handleLike = () => {
    mutate({
      help_fuls: {
        indicator: 1
      }
    });
  };

  return (
    <button
      onClick={handleLike}
      className="flex border border-[#c8c9ca] px-[16px] py-[6px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-max"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 font-bold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
      <p className="font-[500] text-xs">
        Helpful {!isLoading ? data.counter : 0}
      </p>
    </button>
  );
};

export default Like;
