import React from "react";
import { Link } from "react-router-dom";
import client from "../../../services/react-query";

const GetDirection = () => {
  const address = client.getQueryData(["unit-business"]).profile?.business_details?.address;

  return (
    <Link
      to={`/map/directions/${address}#biz`}
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black"
    >
      <p className="font-medium">Get Directions</p>
    </Link>
  );
};

export default GetDirection;
