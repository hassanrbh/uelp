import Stack from "@mui/material/Stack";
import Notifications from "./Notifications"
import Tippy from "@tippyjs/react";
import React from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import Button from "./button";

const RightNav = ({ username, logout, avatar }) => {
  return (
    <div className="relative right-8 flex flex-row-reverse">
      <Stack direction="row-reverse" spacing={2}>
        <MenuList username={username} logout={logout} avatar={avatar} />
        <Tippy
          content={<span className="font-bold">Notifications</span>}
          interactive={true}
          animation="scale"
          className="relative mr-1 bottom-3"
        >
          <Notifications />
        </Tippy>
        <Link to="/profile/messages" className="2xl:block xl:block">
          <Tippy
            animation="scale"
            content={<span className="font-bold">Messages</span>}
            interactive={true}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer absolute right-[6.8rem] top-2"
              width="26px"
              height="29px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Tippy>
        </Link>
        <Link to="/profile/writereview" className="h-0">
          <Button
            element="Write a review"
            css="rounded text-black px-2 py-2 right-3 mr-[64px]
            mt-[2px] hover:bg-gray-200 transition ease-in-out duration-700
            lg:hidden smm:hidden sm:hidden 2xl:block xl:block"
          />
        </Link>
        <Link to="/biz" className="h-0">
          <Button
            element="For Businesses"
            css="items-center rounded px-2 py-2 text-black right-3
            mt-[2px] hover:bg-gray-200 transition-all smm:hidden ease-in-out duration-700 2xl:block lg:hidden sm:hidden 2xl:block"
          />
        </Link>
      </Stack>
    </div>
  );
};

export default RightNav;
