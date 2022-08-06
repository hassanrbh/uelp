import React, {useRef, useState} from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FlagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "react-query";
import questionService from "../../services/questions.service.js";
import Dividor from "../reusableComponents/Dividor";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Discussions = () => {
  const ref= useRef();

  useOnClickOutside(ref, () => setIsOpen((prev) => false));

  const [Items] = useState(["Popular", "Newest First"]);
  const [activeMenuItem, SetActiveMenuItem] = useState("Popular");
  const [isOpen, setIsOpen] = useState(false);

  const { question, business: business_slug } = useParams();
  const {
    state: { question_id },
  } = useLocation();

  const { data, isLoading } = useQuery([`${question}_question`], () =>
    questionService.getQuestionData({
      question_id,
      business_slug,
    })
  );

  return (
    <>
      <div className="font-bold text-[28px] flex justify-between">
        <div>{question}</div>
        <Tippy
          animation="scale"
          content={<span className="font-bold">Report question</span>}
          interactive={true}
        >
          <Link
            to={"/flag_content"}
            className=" border relative top-[3px] border-[#c8c9ca] p-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
          >
            <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
          </Link>
        </Tippy>
      </div>
      {!isLoading ? (
        <>
          <div className="font-[400] text-[14px] flex mt-1 text-[rgba(110,112,114,1)]">
            <p>
              Asked by{" "}
              <span className="font-bold text-[rgba(2,122,151,1)]">
                {data?.questioner?.username}
              </span>
            </p>
            <p className="separator">{data?.created_at}</p>
          </div>
        </>
      ) : null}
      <label className="flex mt-[13px] bobi">
        <input
          type="checkbox"
          name="notify"
          className="mr-[10px] w-[22px] bob"
        />
        <p className="text-md font-normal">Notify me of a new answers</p>
      </label>
      {!isLoading ? (
        <div className="flex justify-between mt-5">
          <div className="text-[28px] font-bold">
            {data?.answers?.length} Answers
          </div>
          <div>
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
            <div className="shadow-lg mt-2 bg-[#fff] p-[15px] rounded-md max-w-fit absolute z-[100]" ref={ref}>
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

          </div>
        </div>
      ) : null}
      <Dividor />
      {!isLoading ? (
        <>
          {data?.answers?.length > 1 ? (
            <>Here are the answers</>
          ) : (
            <>
              <div className="font-bold text-base">
                There aren’t any answers for this question yet. Yours could be
                the first!
              </div>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default Discussions;
