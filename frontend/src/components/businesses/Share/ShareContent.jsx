import React, {useState} from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Alert from '@mui/material/Alert';

import { ClipboardIcon } from "@heroicons/react/outline";


const ShareContent = () => {
  const [saved, isSaved] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href)
    isSaved(prev => !prev)
  }
  return (
    <>
    {saved ? <Alert severity="success" className="top-0 right-0 px-0 py-0 absolute rounded-[10px] ease-in-out transition-all duration-700 " color="info">
      <p className="font-bold">Saved To clickboard</p>
    </Alert> : null}
      <div className="flex justify-between">
        <div className="bg-[#1a77f2] hover:bg-[#4896fc] transition-colors pt-[5px] pb-[4px] pl-[20px] pr-[29px] rounded ease-in-out duration-700">
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
        <div className="pt-[5px] pb-[4px] px-[29px] rounded bg-[#05abed] group hover:bg-[#56c6f3] transition-colors ease-in-out duration-700">
          <TwitterShareButton url={"twitter.com"} className="flex ">
            <TwitterIcon
              size={32}
              className="group-hover:bg-[#05abed] mr-[3px]"
            />
            <p className="font-medium text-white mt-[3px]">Share On Twitter</p>
          </TwitterShareButton>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="flex border border-[#c8c9ca] text-black hover:bg-gray-200 py-[5px] relative left-[3px] px-[14px] rounded ease-in-out duration-700" onClick={handleClick}>
          <ClipboardIcon  className="h-6 w-6 mr-[3px]" />
          <p className="font-medium">Copie</p>
        </button>
      </div>
    </>
  );
};

export default ShareContent;
