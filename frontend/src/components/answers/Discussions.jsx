import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FlagIcon } from "@heroicons/react/outline";
import { useQuery } from "react-query";

const Discussions = () => {
  const { question, business } = useParams();
  const {state} = useLocation()

  const {} = useQuery([`${question}_question`], () => )

  return (
    <>
      <div className="font-bold text-[28px] flex justify-between">
        <div>{question}</div>
        <Link
          to={"/flag_content"}
          className=" border relative top-[3px] border-[#c8c9ca] p-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
        >
          <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
        </Link>
      </div>
      <div></div>
    </>
  );
};

export default Discussions;
