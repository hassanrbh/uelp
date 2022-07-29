import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import DynamicQuestions from "./DynamicQuestions";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const RightSection = () => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen((prev) => !prev));

  const [Items] = useState(["Popular", "Most Answered", "Newest First"]);
  const [activeMenuItem, SetActiveMenuItem] = useState("Popular");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-2">
        <h1 className="font-bold text-2xl">Ask the Community</h1>
        <div className="font-light text-sm mt-1 flex ml-1 ">
          Sort by{" "}
          <span
            className="ml-1 text-[rgba(2,122,151,1)] font-bold flex cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {activeMenuItem}{" "}
            <ChevronDownIcon className="h-4 w-4 relative mt-[2px] ml-1" />
          </span>
        </div>
        {isOpen ? (
          <>
            <div
              className="shadow bg-[#fff] p-[15px] rounded-md max-w-fit absolute z-[100]"
              ref={ref}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {Items.map((item, __idx__) => (
                <div
                  key={__idx__}
                  className={`font-[400px] hover:bg-gray-100 hover:rounded cursor-pointer p-[8px]
                    text-sm ${
                      activeMenuItem === item
                        ? "bg-blue-100 rounded text-[#027a97] font-semibold hover:bg-blue-100"
                        : null
                    }
                    `}
                  onClick={() => SetActiveMenuItem(item)}
                >
                  {activeMenuItem === item ? activeMenuItem : item}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default RightSection;
