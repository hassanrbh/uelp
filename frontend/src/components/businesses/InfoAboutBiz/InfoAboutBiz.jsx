import React from "react";
import {
  LinkIcon,
  PhoneOutgoingIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import client from "../../../services/react-query";
import Dividor from "../../reusableComponents/Dividor";
import { Link } from "react-router-dom";

const InfoAboutBiz = () => {
  const business = client.getQueryData(["unit-business"]).profile;

  return (
    <div className="border border-[#ebebeb] w-[363px] h-auto rounded-lg ml-[30px]">
      <div className="m-4 block">
        <div className="flex justify-between">
          <a
            target="_blank"
            href={business.additional_info.web_address}
            rel="noreferrer"
            className="font-bold text-[#017a97] text-base hover:underline"
          >
            {business.additional_info.web_address}
          </a>
          <LinkIcon
            width={25}
            height={25}
            className="font-bold cursor-pointer text-blue-400"
          />
        </div>
        <Dividor />
        <div className="flex justify-between">
          <span className="text-base">
            {business.private_details.phone_number}
          </span>
          <PhoneOutgoingIcon
            width={25}
            height={25}
            className="font-bold cursor-pointer text-red-400"
          />
        </div>
        <Dividor />
        <div className="flex justify-between">
          <div className="block">
            <Link to={`/map/${business.business_details.address}`} className="font-bold text-[#017a97] text-base hover:underline">
              Get Directions
            </Link>
            <p className="font-bold text-sm">{business.business_details.address}</p>
          </div>
          <BadgeCheckIcon
            width={25}
            height={25}
            className="font-bold cursor-pointer text-green-400 relative top-2"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoAboutBiz;
