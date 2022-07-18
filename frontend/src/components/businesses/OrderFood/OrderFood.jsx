import React, { useState } from "react";
import AnimatedBar from "./AnimatedBar";
import DeliveryInfo from "./DeliveryInfo";
import { TextField } from "@mui/material";

const OrderFood = () => {
  const [toggleForDelivery, setIsToggleForDelivery] = useState(true);
  const [isActiveDelivery, setIsActiveDelivery] = useState(true);
  const [toggleForTakeout, setIsToggleForTakeout] = useState(false);
  const [isActiveTakeout, setIsActiveTakeout] = useState(false);
  const [captureAddress, setCaptureAddress] = useState("");

  
  const toggling = (e) => {
    if (e.target.dataset.id === "delivery") {
      setIsActiveTakeout((prev) => !prev);
      setIsToggleForTakeout((prev) => !prev);
      setIsToggleForDelivery((prev) => !prev);
      setIsActiveDelivery((prev) => !prev);
      return;
    }
    setIsActiveDelivery((prev) => !prev);
    setIsToggleForDelivery((prev) => !prev);
    setIsToggleForTakeout((prev) => !prev);
    setIsActiveTakeout((prev) => !prev);
  };

  const v2ToPayment = () => {
    console.log("hello world");
  }

  return (
    <div className="border border-[#ebebeb] w-[363px] h-auto rounded-lg ml-[30px]">
      <div className="m-4">
        <h1 className="font-extrabold text-[rgb(45, 46, 47)] text-xl">
          Order Food
        </h1>
        <ul
          onClick={(e) => toggling(e)}
          className="flex ml-4 mt-5 mb-[20px] gap-4"
        >
          <div>
            <li
              data-id="delivery"
              className={`transition-all ease-in-out cursor-pointer  text-[#2d2e2f] font-[600] ${
                isActiveDelivery ? "text-[#2d2e2f]" : "text-[#6E7083]"
              } text-[17px]`}
            >
              Delivery
            </li>
            {toggleForDelivery ? (
              <>
                <AnimatedBar x={80} />
              </>
            ) : null}
          </div>
          <div>
            <li
              data-id="takeout"
              className={`transition-all ease-in-out cursor-pointer text-[#2d2e2f] text-[17px]  ${
                isActiveTakeout ? "text-[#2d2e2f]" : "text-[#6E7083]"
              } font-[600]`}
            >
              Takeout
            </li>
            {toggleForTakeout ? (
              <>
                <AnimatedBar x={-80} />
              </>
            ) : null}
          </div>
        </ul>
        {toggleForDelivery ? (
          <div className="text-center flex flex-col">
            <DeliveryInfo />
            <TextField
              label="Delivery Address"
              color="primary"
              value={captureAddress}
              variant="outlined"
              margin="normal"
              required
              sx={{width: "100%"}}
              disableUnderline={false}
              autoComplete="off"
              onChange={(e) => setCaptureAddress(e.target.value)}
            />
          </div>
        ) : null}
        {toggleForTakeout ? <div>World</div> : null}
      </div>
    </div>
  );
};

export default OrderFood;
