import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import StyledBadge from "./styled_badge";
import Tippy from "@tippyjs/react";
import Avatar from "@mui/material/Avatar";

const MenuList = ({ username }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  } 
  return (
    <Menu as="div" className="ml-3 relative">
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
                alt="Remy Sharp"
                src={require("../../assets/images/boy-cartoon-face-free-vector.jpeg")}
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
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                About Me
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Find Friends
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Account Settings
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuList;
