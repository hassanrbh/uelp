import React from "react";

const MoreAmenties = ({data}) => {
  return (
    <button
      to="/biz_user_photos"
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black"
    >
      <span className="mr-[4px] font-medium">{data.length}</span>
      <p className="font-medium">More Attributes</p>
    </button>
  );
};

export default MoreAmenties;
