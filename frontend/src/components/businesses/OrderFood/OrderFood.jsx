import React, { useState } from "react";
import AnimatedBar from "./AnimatedBar";
import DeliveryInfo from "./DeliveryInfo";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FeeInfo from "./FeeInfo";

const OrderFood = () => {
  const navigate = useNavigate();

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

  const v2ToPayment = (e) => {
    e.preventDefault();
    return navigate(
      "/order", {
        replace: true,
        state: {
          type: "delivery",
          captureAddress
        }
      }
    )
  };

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
            <form onSubmit={(e) => v2ToPayment(e)}>
              <TextField
                label="Delivery Address"
                color="primary"
                value={captureAddress}
                variant="outlined"
                margin="normal"
                required
                sx={{ width: "100%" }}
                className="p-[10px] m-[4px]"
                autoComplete="off"
                onChange={(e) => setCaptureAddress(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 bg-[#e00706] px-[16px] py-[7px] rounded-md text-white font-medium text-center inline w-full"
              >
                Start Order
              </button>
            </form>
          </div>
        ) : null}
        {toggleForTakeout ? (
          <FeeInfo />
        ) : null}
      </div>
    </div>
  );
};

export default OrderFood;
