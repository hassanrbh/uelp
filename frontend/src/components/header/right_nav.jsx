import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import SvgElementNotification from "./svgElementNotification";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import Button from "./button";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const RightNav = ({ username, logout, avatar }) => {
  const [isHover, setIsHover] = useState(false);
  const addColors = (e) => {
    setIsHover(true);
  };
  const clearColors = (e) => {
    setIsHover(false);
  };

  return (
    <div className="relative right-8 flex flex-row-reverse">
      <Stack direction="row-reverse" spacing={2}>
        <MenuList username={username} logout={logout} avatar={avatar} />
        <Tippy
          content={<span className="font-bold">Notifications</span>}
          interactive={true}
          animation="scale"
          className="mr-[9px]"
        >
          <Link to="/profile/notifications" className="2xl:block xl:block">
            <svg
              onMouseEnter={addColors}
              onMouseLeave={clearColors}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="webnotification"
              x="0px"
              y="0px"
              viewBox="0 0 214.6279 199.8223"
              enableBackground="new 0 0 214.6279 199.8223"
              width="30"
              height="30"
              className="cursor-pointer absolute right-12 top-2 mr-2"
            >
              <g>
                <path
                  fill="#5CB0FF"
                  d="M110.4863,184h82.5234l-41.2617-75.6484L110.4863,184z M155.748,168h-8v-44h8V168z"
                />
                <path
                  fill="#1C71DA"
                  d="M91.748,160V84h42.989c0.0146,0.7878,0.0696,1.5579,0.0696,2.3516c0,2.2109,1.7891,4,4,4s4-1.7891,4-4   c0-0.7937-0.0603-1.5632-0.0745-2.3516h25.0159h5.6484h2.3516c0-46.3164-37.6836-84-84-84h-8v0.4053   C41.1726,4.45,7.748,40.3838,7.748,84c0,46.3164,37.6836,84,84,84c2.2109,0,4-1.7891,4-4S93.959,160,91.748,160z M83.748,158.6755   c-19.9287-6.438-35.0586-36.3945-35.0586-72.324c0-0.7937,0.0549-1.5637,0.0696-2.3516h34.989V158.6755z M49.1655,76   C51.75,44.7942,65.7729,19.8376,83.748,14.0312V76H49.1655z M91.748,76V12.707c21.6829,0,39.6248,27.5808,42.5825,63.293H91.748z    M167.3181,76h-24.9685c-2.3884-29.9812-14.96-54.8911-31.9993-65.6013C140.7681,18.0952,163.9641,44.0977,167.3181,76z    M73.1458,10.3987C56.1064,21.1089,43.5349,46.0188,41.1465,76H16.178C19.532,44.0977,42.728,18.0952,73.1458,10.3987z M15.748,84   h25.0159c-0.0142,0.7883-0.0745,1.5579-0.0745,2.3516c0,28.5327,9.217,53.6572,23.1233,68.2603   C35.7031,143.4497,15.748,116.0374,15.748,84z"
                />
                <path
                  fill="#1C71DA"
                  d="M203.2598,186.0859l-48-88c-1.3984-2.5703-5.625-2.5703-7.0234,0l-48,88   c-0.6758,1.2383-0.6484,2.7422,0.0703,3.957c0.7227,1.2109,2.0312,1.957,3.4414,1.957h96c1.4102,0,2.7188-0.7461,3.4414-1.957   C203.9082,188.8281,203.9355,187.3242,203.2598,186.0859z M110.4863,184l41.2617-75.6484L193.0098,184H110.4863z"
                />
                <rect
                  x="147.748"
                  y="124"
                  fill="#FFFFFF"
                  width="8"
                  height="44"
                />
                <rect
                  x="147.748"
                  y="171.3333"
                  fill="#FFFFFF"
                  width="8"
                  height="4.9167"
                />
              </g>
              {isHover ? <SvgElementNotification /> : null}
            </svg>
          </Link>
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
