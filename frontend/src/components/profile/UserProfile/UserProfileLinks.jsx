import React from "react";
import {
  PhotographIcon,
  IdentificationIcon,
  FingerPrintIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const UserProfileLinks = () => {
  return (
    <div className="ml-[100px] mt-[62px] flex flex-col">
      <div className="flex">
        <PhotographIcon width={20} height={20} className="text-[#0073bb] pt-[2px] mr-1" />
        <Link to={"/user_photos/add"} className="text-[#0073bb] font-medium">
          Add Profile Photos
        </Link>
      </div>
      <div className="flex">
        <IdentificationIcon width={20} height={20} className="text-[#0073bb] pt-[2px] mr-1" />
        <Link to={"/profile"} className="text-[#0073bb] font-medium">
          Update Your Profile
        </Link>
      </div>
      <div className="flex">
        <FingerPrintIcon width={20} height={20} className="text-[#0073bb] pt-[2px] mr-1" />
        <Link to={"/"} className="text-[#0073bb] font-medium">
          Find Friends
        </Link>
      </div>
    </div>
  );
};

export default UserProfileLinks;
