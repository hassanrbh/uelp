import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const SortBy = ({
  isOpen,
  activeMenuItem,
  Items,
  SetActiveMenuItem,
  setIsOpen,
  ref
}) => {
  return (
    <>
      <div className="text-sm font-normal flex mt-2">
        Sort by{' '}
        <span
          className="ml-1 text-[rgba(2,122,151,1)] font-bold flex cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {activeMenuItem}{' '}
          <ChevronDownIcon className="h-4 w-4 relative mt-[2px] ml-1" />
        </span>
      </div>
      {isOpen ? (
        <>
          <div
            className="shadow-lg mt-2 bg-[#fff] p-[15px] rounded-md max-w-fit absolute z-[100]"
            ref={ref}
          >
            {Items.map((item, __idx__) => (
              <div
                key={__idx__}
                className={`font-[400px] hover:bg-gray-100 hover:rounded cursor-pointer p-[8px]
                  text-sm ${
                    activeMenuItem === item
                      ? 'bg-blue-100 rounded text-[#027a97] font-semibold hover:bg-blue-100'
                      : null
                  }
                  `}
                onClick={() => {
                  SetActiveMenuItem(item);
                  setIsOpen((prev) => !prev);
                }}
              >
                {activeMenuItem === item ? activeMenuItem : item}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SortBy;
