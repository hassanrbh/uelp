import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
// import Alert from "@mui/material/Alert";
import OrLineUp from "../../login/OrLineUp";
// import { ClipboardIcon } from "@heroicons/react/outline";
import { TextField } from "@mui/material";
import { useMutation } from "react-query";
import shareService from "../../../services/share.service";
import client from "../../../services/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../reusableComponents/Loading";

const ShareContent = () => {
  // const [saved, isSaved] = useState(false);
  // const handleClick = () => {
  //   navigator.clipboard.writeText(window.location.href);
  //   isSaved((prev) => !prev);
  //   setTimeout(() => {
  //     isSaved((prev) => !prev);
  //   }, 1000);
  // };
  const [to, setTo] = useState("");
  const [note, setNote] = useState("");

  const business_slug = client.getQueryData(["unit-business"]).profile
    ?.private_details?.name;
  const { mutate, isLoading } = useMutation(
    (params) => shareService.share(business_slug, params),
    {
      onSuccess: (data) => {
        notify_success(data.send);
      },
      onError: (error) => {
        if (error.response.data.error) {
          notify_error(error.response.data.error[0]);
        } else if (error.response.data.to) {
          notify_error(error.response.data.to[0]);
        }
      },
    }
  );
  const notify_success = (msg) => toast.success(msg);
  const notify_error = (msg) => toast.error(msg);

  const sendEmail = (e) => {
    e.preventDefault();

    mutate({
      share: {
        to,
        note,
      },
    });
  };

  return (
    <>
      {/* {saved ? (
        <Alert
          severity="success"
          className="top-0 right-0 px-0 py-0 absolute rounded-[10px] ease-in-out transition-all duration-700 "
          color="info"
        >
          <p className="font-bold">Saved To clickboard</p>
        </Alert>
      ) : null} */}
      <div className="flex justify-between mb-7 cursor-pointer">
        <div className="bg-[#1a77f2] hover:bg-[#4896fc] transition-colors pt-[5px] pb-[4px] pl-[14px] pr-[30px] rounded ease-in-out duration-700">
          <FacebookShareButton url={"google.com"} className="flex">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              className="rounded-full pr-[4px] mr-[3px]"
            >
              <rect width="62" height="61" rx="37" ry="26" fill="white"></rect>
              <path
                width="32"
                height="32"
                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                fill="#1a77f2"
              ></path>
            </svg>
            <p className="font-medium text-white mt-[3px]">Share On Facebook</p>
          </FacebookShareButton>
        </div>
        <div className="pt-[5px] pb-[4px] cursor-pointer px-[30px] rounded bg-[#05abed] group hover:bg-[#56c6f3] transition-colors ease-in-out duration-700">
          <TwitterShareButton url={"twitter.com"} className="flex ">
            <TwitterIcon
              size={32}
              className="group-hover:bg-[#05abed] mr-[3px]"
            />
            <p className="font-medium text-white mt-[3px]">Share On Twitter</p>
          </TwitterShareButton>
        </div>
      </div>
      {/* <div className="flex justify-center mt-3 mb-7">
      <button className="flex border border-[#c8c9ca] text-black hover:bg-gray-200 py-[5px] relative  px-[14px] left-[9px] rounded ease-in-out duration-700" onClick={handleClick}>
        <ClipboardIcon  className="h-6 w-6 mr-[3px]" />
        <p className="font-medium">Copie</p>
      </button>
    </div> */}
      <OrLineUp />
      <form onSubmit={(e) => sendEmail(e)}>
        <TextField
          label="To"
          color="primary"
          variant={"outlined"}
          margin={"normal"}
          sx={{ width: "100%" }}
          autoComplete="off"
          value={to}
          onChange={(e) => setTo(e.currentTarget.value)}
          InputProps={{
            className: "p-0 h-[48px]",
          }}
        />
        <p className="font-light text-xs text-gray-500 text-left ml-2">
          Yelper names or email addresses
        </p>
        <TextField
          label="Add a note (optional)"
          color="primary"
          variant={"outlined"}
          margin={"normal"}
          sx={{ width: "100%" }}
          value={note}
          onChange={(e) => setNote(e.currentTarget.value)}
          autoComplete="off"
          multiline
          minRows={3}
          maxRows={10}
          InputProps={{
            className: "p-0 h-[100px]",
          }}
        />
        {isLoading ? (
          <button
            type="submit"
            className="mt-2 bg-[#e00706] px-[16px] py-[7px] rounded-md ease-in-out w-[70px] hover:bg-[#e86464] transition-colors duration-700  text-white font-medium text-center inline"
          >
            <svg
              version="1.1"
              id="L2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <circle
                fill="none"
                stroke="#fff"
                stroke-width="4"
                stroke-miterlimit="10"
                cx="50"
                cy="50"
                r="48"
              />
              <line
                fill="none"
                stroke-linecap="round"
                stroke="#fff"
                stroke-width="4"
                stroke-miterlimit="10"
                x1="50"
                y1="50"
                x2="85"
                y2="50.5"
              >
                <animateTransform
                  attributeName="transform"
                  dur="2s"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </line>
              <line
                fill="none"
                strokeLinecap="round"
                stroke="#fff"
                strokeWidth="4"
                strokeMiterlimit="10"
                x1="50"
                y1="50"
                x2="49.5"
                y2="74"
              >
                <animateTransform
                  attributeName="transform"
                  dur="15s"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            className="mt-2 bg-[#e00706] px-[16px] py-[7px] rounded-md ease-in-out w-[117px] hover:bg-[#e86464] transition-colors duration-700  text-white font-medium text-center inline"
          >
            Share
          </button>
        )}
      </form>
    </>
  );
};

export default ShareContent;
