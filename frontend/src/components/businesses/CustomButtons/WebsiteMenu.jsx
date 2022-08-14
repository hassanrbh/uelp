import React from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon } from '@heroicons/react/outline';

const WebsiteMenu = () => {
  return (
    <Link
      to="/menu"
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
    >
      <GlobeIcon className="h-6 w-6 mr-[6px]" />
      <p className="font-medium">Website menu</p>
    </Link>
  );
};

export default WebsiteMenu;
