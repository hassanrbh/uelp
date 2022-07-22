import React from "react";

const MoreAmenties = ({count, setToggle, toggle}) => {
  return (
    <button
      to="/biz_user_photos"
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black mt-5 mb-3"
      onClick={() => setToggle(prev => !prev)}
    >
      {!toggle ? <span className="mr-[4px] font-medium">{count}</span> : null}
      <p className="font-medium">{!toggle ? "More Attributes" : "Show Less"}</p>
    </button>
  );
};

export default MoreAmenties;
