import React from "react";
import { useNavigate } from "react-router-dom";

const FeeInfo = () => {
  const navigate = useNavigate();

  const v2ToPayment = () => {
    return navigate(
      "/order", {
        replace: true,
        state: {
          type: "takeout",
        }
      }
    )
  };

  return (
    <div>
      <div className="flex text-center text-sm mb-5">
        <div className="flex border-r border-gray-200 mr-3 pr-2">
          <p className="font-bold pr-1">$No Fees</p>
        </div>
        <div className="flex mr-3 pr-2">
          <span className="text-gray-500 font-light pr-2">Pick up in</span> 
          <p className="font-bold pr-1">25-35 mins</p>
        </div>
      </div>
      <button
        type="submit"
        onClick={v2ToPayment}
        className="mt-2 bg-[#e00706] px-[16px] py-[7px] rounded-md text-white font-medium text-center inline w-full"
      >
        Start Order
      </button>
    </div>
  );
};

export default FeeInfo;
