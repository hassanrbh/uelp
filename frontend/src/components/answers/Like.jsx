import React from 'react';

const Like = ({ data, isLoading }) => {
  return (
    <button className="flex border border-[#c8c9ca] px-[16px] py-[6px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-max">
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
