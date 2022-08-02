import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import DynamicQuestions from "./DynamicQuestions";
import Dividor from "../reusableComponents/Dividor";
import WriteQuestion from "./WriteQuestion";

const RightSection = () => {
  const ref = useRef();
  const parent = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
  });

  useOnClickOutside(ref, () => setIsOpen((prev) => false));

  const [Items] = useState(["Popular", "Most Answered", "Newest First"]);
  const [activeMenuItem, SetActiveMenuItem] = useState("Popular");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div ref={ref}>
        <h1 className="font-bold text-3xl">Ask the Community</h1>
        <div className="text-sm font-normal flex mt-2">
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
            <div className="shadow bg-[#fff] p-[15px] rounded-md max-w-fit absolute z-[100]" ref={parent}>
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
        <Dividor className="w-[800px]" />
        <DynamicQuestions
          currentItem={
            activeMenuItem === "Most Answered"
              ? "most_answered"
              : activeMenuItem
          }
        />
        <WriteQuestion />
      </div>
    </>
  );
};

export default RightSection;
