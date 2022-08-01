import React, { useState, useRef } from "react";
import AnimatedBar from "./AnimatedBar";
import DeliveryInfo from "./DeliveryInfo";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FeeInfo from "./FeeInfo";
import { useQuery } from "react-query";
import geoPifyAutoCompletion from "../../../api/geoapify-auto";
import useDebounce from "../../../hooks/useDebounce";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const OrderFood = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const [toggleForDelivery, setIsToggleForDelivery] = useState(true);
  const [isActiveDelivery, setIsActiveDelivery] = useState(true);
  const [toggleForTakeout, setIsToggleForTakeout] = useState(false);
  const [isActiveTakeout, setIsActiveTakeout] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [captureAddress, setCaptureAddress] = useState("");
  const [closePanel, setClosePanel] = useState("");

  const debouncedaddress = useDebounce(captureAddress, 500);

  useOnClickOutside(ref, () => setClosePanel((prev) => !prev));

  const { isLoading, isSuccess } = useQuery(
    ["geoApify"],
    () => geoPifyAutoCompletion.getData(debouncedaddress),
    {
      enabled: captureAddress.length >= 1 ? Boolean(debouncedaddress) : false,
      onSuccess: (data) => {
        setAddresses(data);
      },
    }
  );

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

    setCaptureAddress("");

    return navigate("/order", {
      replace: true,
      state: {
        type: "delivery",
        captureAddress,
      },
    });
  };

  const updateCaptureAddress = (e) => {
    setCaptureAddress(e.target.value);
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
              <div>
                <div className="relative">
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
                    onChange={(e) => updateCaptureAddress(e)}
                    InputProps={{
                      className: "p-0 h-[48px]",
                    }}
                    onClick={() => setClosePanel((prev) => false)}
                  />
                  {!isLoading && isSuccess && !closePanel ? (
                    <div
                      ref={ref}
                      className={
                        `bg-gray min-w-[329px] absolute p-3 h-fit bottom-[-35px] top-[64px] z-50 overflow-y-auto shadow padding-[16px] bg-[#fff] rounded-[4px]
                        ${addresses?.features?.length >= 1 ? null : "hidden"}
                        `}
                    >
                      {addresses?.features?.map((address, __idx__) => (
                        <p
                          key={__idx__}
                          className="font-light hover:bg-gray-100 text-left mt-1 cursor-pointer rounded-md"
                          onClick={(e) => {
                            setCaptureAddress(e.target.textContent);
                            setClosePanel((prev) => !prev);
                          }}
                        >
                          {address?.properties?.address_line2}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 bg-[#e00706] px-[16px] py-[7px] rounded-md ease-in-out hover:bg-[#e86464] transition-colors duration-700  text-white font-medium text-center inline w-full"
              >
                Start Order
              </button>
            </form>
          </div>
        ) : null}
        {toggleForTakeout ? <FeeInfo /> : null}
      </div>
    </div>
  );
};

export default OrderFood;
