import React from 'react';

const Flyer = ({ close, setClose }) => {
  return (
    <>
      {!close ? (
        <div className="bg-blue-100 text-base py-[14px] pr-[24px] pl-[16px] rounded border-l-8 border-l-[#1f8eff] flex justify-between mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 relative top-2 w-8 text-[#1f8eff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="max-w-[671px] text-[17px] mr-10">
            <span className="font-bold">Your trust is our top concern,</span> so
            businesses can't pay to alter or remove their reviews. Learn more.
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setClose((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Flyer;
