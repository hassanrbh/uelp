import React from 'react';
import Section from './Section';
import { ChevronDownIcon } from '@heroicons/react/solid';

const FilterReviews = ({
  setIsOpen,
  activeMenuItem,
  isOpen,
  FilterItems,
  SetActiveMenuItem
}) => {
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center border border-[#c8c9ca] px-3 py-[6px] rounded-2xl hover:bg-gray-200 ease-in-out duration-700"
      >
        <p className="font-medium text-xs">
          {activeMenuItem ? activeMenuItem : 'Filter by rating'}
        </p>
        <ChevronDownIcon className="h-4 w-4 relative mt-[2px] ml-1" />
      </button>

      <Section
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Items={FilterItems}
        activeMenuItem={activeMenuItem}
        SetActiveMenuItem={SetActiveMenuItem}
      />
    </>
  );
};

export default FilterReviews;
