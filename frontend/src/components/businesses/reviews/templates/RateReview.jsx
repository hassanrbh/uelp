import React, { useState } from 'react';
import Rating from 'react-rating';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const RateReview = () => {
  const { business_name } = useParams();
  const [backgroundColor, setBackgroundColor] = useState('');
  const navigate = useNavigate();

  const gotoRate = (e) => {
    // localStorage.setItem(
    //   `rating_${business_name}`,
    //   JSON.stringify({ rate: { rate: e, backgroundColor } })
    // );
    navigate(`/writereview/biz/${business_name}`, {
      state: { rate: e }
    });
  };

  return (
    <div className="min-w-[394px]">
      <Rating
        // placeholderRating={
        //   JSON.parse(localStorage.getItem(`rating_${business_name}`))?.rate
        //     ?.rate
        // }
        onChange={(e) => gotoRate(e)}
        onHover={(e) => {
          if (e === 1) {
            setBackgroundColor('bg-yellow-300');
          } else if (e === 2) {
            setBackgroundColor('bg-orange-300');
          } else if (e === 3) {
            setBackgroundColor('bg-orange-500');
          } else if (e === 4) {
            setBackgroundColor('bg-orange-600');
          } else if (e === 5) {
            setBackgroundColor('bg-red-500');
          }
        }}
        emptySymbol={
          <p className="bg-[#ebebec] rounded-md mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[34px] w-[34px] text-white p-[6.5px] "
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
          <p className={`rounded-md mr-1`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[34px] w-[34px] text-white p-[6.5px]"
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
              className="h-[34px] w-[34px] text-white p-[6.5px]"
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
      <Link
        to={`/writereview`}
        className="text-[#027a97] hover:underline text-sm cursor-pointer block"
      >
        Start your review of <span className="font-bold">{business_name}</span>
      </Link>
    </div>
  );
};

export default RateReview;
