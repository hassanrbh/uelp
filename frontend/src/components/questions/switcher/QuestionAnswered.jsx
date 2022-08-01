import React, {useState} from "react";
import Dividor from "../../reusableComponents/Dividor";
import Writer from "./Writer";
import { Link, useParams } from "react-router-dom";

const QuestionAnswered = ({ question, writer, answers }) => {
  const { business } = useParams();
  const [more, isMore] = useState(false);

  return (
    <div className="font-[400] text-sm">
      <Writer question={question} writer={writer} />
      <div>
        {answers.length <= 1 &&
          answers.map((ans, idx) => (
            <div className="mt-2 flex" key={idx}>
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={ans?.answerer?.avatar}
                alt=""
                img="true"
              />
              <div>
                <h1 className="max-w-[760px] ml-3 text-sm font-[400] m-1 text-[rgba(45,46,47,1)] ">
                  {ans?.answer?.slice(0, 350)}
                  {more ? ans?.answer?.slice(350, -1) : "..."}{" "}
                  {more ? (
                    <span
                      onClick={() => isMore((prev) => !prev)}
                      className="font-bold text-[rgba(2,122,151,1)] hover:underline cursor-pointer"
                    >
                      less
                    </span>
                  ) : (
                    <span
                      onClick={() => isMore((prev) => !prev)}
                      className="font-bold text-[rgba(2,122,151,1)] hover:underline cursor-pointer"
                    >
                      more
                    </span>
                  )}
                </h1>
                <div className="flex ml-3 text-[12px] gap-2 text-gray-600">
                  <Link
                    to={`/user_details?username=${ans?.answerer?.username}`}
                    className="text-[rgba(2,122,151,1)] hover:underline"
                  >
                    {ans?.answerer?.username}
                  </Link>
                  <p>{ans?.created_at} ago</p>
                  <p>4 people found this helpful</p>
                </div>
              </div>
            </div>
          ))}
        {answers.length >= 2 &&
          answers.slice(0, 1).map((ans, idx) => (
            <div className="mt-2 flex" key={idx}>
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                img="true"
                src={ans?.answerer?.avatar}
                alt=""
              />
              <div>
                <h1 className="max-w-[760px] ml-3 text-sm font-[400] m-1 text-[rgba(45,46,47,1)] ">
                  {ans.answer}
                </h1>
                <div className="flex ml-3 text-[12px] gap-2 text-gray-600">
                  <Link
                    to={`/user_details?username=${ans?.answerer?.username}`}
                    className="text-[rgba(2,122,151,1)] hover:underline"
                  >
                    {ans?.answerer?.username}
                  </Link>
                  <p className="">{ans?.created_at} ago</p>
                  <p>4 people found this helpful</p>
                </div>
                <Link
                  to={`/questions/${business}/${question}`}
                  className="border border-[#c8c9ca] px-[10px] relative right-9 text-xs py-[5px] top-2  rounded text-black hover:bg-gray-200 bg-gray-100 ease-in-out duration-700"
                >
                  See {answers?.length} more answer
                </Link>
              </div>
            </div>
          ))}
      </div>
      <Dividor />
    </div>
  );
};

export default QuestionAnswered;
