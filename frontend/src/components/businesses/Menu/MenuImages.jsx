import React from "react";

const MenuImages = ({ item, setSwitcher, switcher, mykey }) => {
  return (
    <>
    <div
      onClick={() => setSwitcher(!switcher)}
      className="swiper-slide flex justify-center !w-[219.5px] !mr-[11px] cursor-pointer opacity-90 items-center font-extrabold rounded bg-no-repeat bg-center	bg-cover"
      style={{ backgroundImage: `url(${item.images.first})` }}
      key={mykey}
    >
      <span className="font-bold relative text-gray-300 opacity-100 top-[51px] right-[60px] ">
        ${item.price}.00
      </span>
    </div>
    </>
  );
};

export default MenuImages;
