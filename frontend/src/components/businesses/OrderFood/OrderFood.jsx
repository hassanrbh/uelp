import React, {useState} from "react";

const OrderFood = () => {
  const [toggleForDelivery, setIsToggleForDelivery] = useState(true);
  const [isActiveDelivery, setIsActiveDelivery] = useState(true);
  const [toggleForTakeout, setIsToggleForTakeout] = useState(false);
  const [isActiveTakeout, setIsActiveTakeout] = useState(false);

  const toggling = (e) => {
    if (e.target.dataset.id === "delivery") {
      setIsActiveTakeout(prev => !prev);
      setIsToggleForTakeout(prev => !prev);
      setIsToggleForDelivery(prev => !prev);
      setIsActiveDelivery(prev => !prev);
      return ;
    }
    setIsActiveDelivery(prev => !prev)
    setIsToggleForDelivery(prev => !prev);
    setIsToggleForTakeout(prev => !prev);
    setIsActiveTakeout(prev => !prev);
  }

  return (
    <div className="border border-[#ebebeb] w-[363px] h-[303px] rounded ml-[30px]">
      <div className="m-4">
        <h1 className="font-extrabold text-[rgb(45, 46, 47)] text-xl">Order Food</h1>
        <ul onClick={(e) => toggling(e)} className="flex ml-4 mt-5 gap-4">
          <li data-id="delivery" className={`cursor-pointer  text-[#2d2e2f] font-[600] ${isActiveDelivery ? "text-[#2d2e2f]" : "text-[#6E7083]"} text-[16px]`}>Delivery</li>
          <li data-id="takeout" className={`cursor-pointer text-[#2d2e2f] text-[16px]  ${isActiveTakeout ? "text-[#2d2e2f]" : "text-[#6E7083]"} font-[600]`}>Takeout</li>
        </ul>
        {toggleForDelivery ? <div>Hello</div> : null}
        {toggleForTakeout ? <div>World</div> : null}
      </div>
    </div>
  );
};

export default OrderFood;
