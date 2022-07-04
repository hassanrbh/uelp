import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import StyledBadge from "./styled_badge";
import Tippy from "@tippyjs/react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import OrLineUp from "../login/OrLineUp";
import FaceIcon from "@mui/icons-material/Face";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuList = ({ username, logout, avatar }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu as="div" className="ml-3 relative z-50">
      <div>
        <Tippy content={<span className="font-bold">{username}.</span>}>
          <Menu.Button className=" flex text-sm rounded-full focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="User Logo"
                src={avatar}
                className="cursor-pointer"
              />
            </StyledBadge>
          </Menu.Button>
        </Tippy>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div className="hover:bg-gray-100">
                <FaceIcon className="absolute m-1" />
                <Link
                  to={`/user_details?username=${username}`}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm  text-gray-700 font-bold ml-4"
                  )}
                >
                  About Me
                </Link>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="hover:bg-gray-100">
                <PeopleIcon className="absolute m-1" />
                <Link
                  to="/profile/friends"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 font-bold ml-4"
                  )}
                >
                  Find Friends
                </Link>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="hover:bg-gray-100">
                <SettingsIcon className="absolute m-1" />
                <Link
                  to="/profile/account_settings"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 font-bold ml-4"
                  )}
                >
                  Account Settings
                </Link>
              </div>
            )}
          </Menu.Item>
          <OrLineUp />
          <Menu.Item>
            {({ active }) => (
              <div className="hover:bg-gray-100">
                <LogoutIcon className="absolute m-1" />
                <Link
                  to="/profile"
                  onClick={() => logout()}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 font-bold ml-4"
                  )}
                >
                  Log Out
                </Link>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuList;
