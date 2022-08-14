import React, { useState } from 'react';
import Rating from 'react-rating';

const ReviewDraft = ({ star, size }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const ColorsSwitch = (star) => {
    switch (parseInt(star)) {
      case 1:
        return 'bg-yellow-300';
      case 2:
        return 'bg-orange-300';
      case 3:
        return 'bg-orange-500';
      case 4:
        return 'bg-orange-600';
      case 5:
        return 'bg-red-500';
      default:
        return '';
    }
  };

  return (
    <Rating
      placeholderRating={star}
      readonly
      emptySymbol={
        <p className="bg-[#ebebec] rounded-md mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              size ? `h-[40px] w-[40px]` : 'h-[22px] w-[22px]'
            } h-[22px] w-[22px] text-white p-[4px]`}
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </p>
      }
      placeholderSymbol={
        <p
          className={`${ColorsSwitch(star)} 
        rounded-md mr-1`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              size ? `h-[40px] w-[40px]` : 'h-[22px] w-[22px]'
            } h-[22px] w-[22px] text-white p-[4px]`}
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </p>
      }
      fullSymbol={
        <p className={`${backgroundColor} rounded-md mr-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` text-white p-[4px] ${
              size ? `h-[40px] w-[40px]` : 'h-[22px] w-[22px]'
            }`}
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </p>
      }
    />
  );
};

export default ReviewDraft;
