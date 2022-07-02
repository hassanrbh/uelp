import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./button";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Moreinfo from './moreinfo';

const RightNavVist = () => {
  return (
    <div className="flex flex-row-reverse">
      <Link to="/register" className="mr-[10px]">
        <Button svgElement={<SubscriptionsIcon className="mr-1"/>}
            element="Sign Up"
            css="flex items-center rounded-lg bg-red-500 px-4 py-2 opacity-100
            text-white right-3 hover:opacity-70
            mt-[2px] hover:bg-red-500 transition mr-5 ease-in-out"/>
      </Link>
      <Link to="/login" className="mr-[1px]">
        <Button svgElement={<VpnKeyIcon className="mr-1" />}
          element="Login"
          css="flex items-center rounded-lg bg-black px-4 py-2 opacity-100
            text-white right-3 hover:opacity-70
            mt-[2px] hover:bg-gray-500 transition mr-5 ease-in-out"/>
      </Link>
      <Moreinfo />
    </div>
  )
}

export default RightNavVist