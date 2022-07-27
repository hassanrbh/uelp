import React from "react";
import client from "../../../services/react-query";
import Divider from "../../reusableComponents/Dividor";
import { Link } from "react-router-dom";
import {FlagIcon} from "@heroicons/react/outline";

const ModalContent = ({setSwitcher}) => {
  const owner = client.getQueryData(["unit-business"]).profile?.owner;
  const additional_info = client.getQueryData(["unit-business"]).profile
    ?.additional_info;

  return (
    <>
      <div className="h-[398px] overflow-auto text-left shadow-sm">
        <div className="">
          <h1 className="font-bold text-base">Specialties</h1>
          <p className="text-[16px] font-[400] mt-2 text-[rgb(45, 46, 47)] font-mono">
            {additional_info && additional_info?.specialties}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-base mt-3 ">History</h1>
          <p className="text-base font-[400] mt-2 text-[rgb(45, 46, 47)] font-mono">
            {additional_info && additional_info?.history}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-base mt-3 mb-3">
            Meet the Business Owner
          </h1>
          <div className="flex mb-2">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white bottom-[3px] relative"
              src={owner?.avatar}
              alt=""
            />
            <div className="ml-2 block relative bottom-[4px]">
              <p className="font-bold text-base">
                {owner?.owner?.slice(0, -4)}.
              </p>
              <p className=" font-normal text-sm text-gray-600">
                Business Owner
              </p>
            </div>
          </div>
          <p className="text-base font-[400] mt-2  font-mono text-[rgb(45, 46, 47)]">
            {owner && owner.about_me}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={() => setSwitcher((prev => !prev))}
        className="bg-[#e00706] px-[16px] py-[7px] rounded ease-in-out hover:bg-[#e86464] transition-colors duration-700  text-white font-medium text-center inline">
          Close
        </button>
        <Link to={"/flag_content"} className=" border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700">
          <FlagIcon className="h-6 w-6"/>
        </Link>
      </div>
    </>
  );
};

export default ModalContent;
