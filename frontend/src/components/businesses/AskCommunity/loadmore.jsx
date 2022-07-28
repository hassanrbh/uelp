import React from "react";
import  { Link } from "react-router-dom";

const Loadmore = ({ count , question}) => {
  return (
    <Link to={`/questions/${question}`} className="border border-[#c8c9ca] px-[8px] text-xs py-[2px]  ml-2 relative left-[22px] rounded text-black hover:bg-gray-200 bg-gray-100 ease-in-out duration-700">
      See {count} more answer
    </Link>
  );
};

export default Loadmore;
