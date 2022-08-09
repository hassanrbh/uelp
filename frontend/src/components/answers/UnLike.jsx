import React from 'react';

const UnLike = () => {
  return (
    <button className="flex border border-[#c8c9ca] px-[16px] py-[6px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-max">
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
  );
};

export default UnLike;
