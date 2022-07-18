import React, {useState} from "react";

const OrderFood = () => {
  const [toggleForDelivery, setIsToggleForDelivery] = useState(true);
  const [toggleForTakeout, setIsToggleForTakeout] = useState(false);

  const toggling = (e) => {
    if (e.target.dataset.id === "delivery") {
      setIsToggleForTakeout(prev => !prev);
      setIsToggleForDelivery(prev => !prev);
      return ;
    }
    setIsToggleForDelivery(prev => !prev);
    setIsToggleForTakeout(prev => !prev);
  }

  return (
    <div className="border border-[#ebebeb] w-[363px] h-[303px] rounded ml-[30px]">
      <div className="m-4">
        <h1 className="font-extrabold text-[rgb(45, 46, 47)] text-xl">Order Food</h1>
        <ul onClick={(e) => toggling(e)} className="">
          <li data-id="delivery">Delivery</li>
          <li data-id="takeout">Takeout</li>
        </ul>
        {toggleForDelivery ? <div>Hello</div> : null}
        {toggleForTakeout ? <div>World</div> : null}
      </div>
    </div>
  );
};

export default OrderFood;
