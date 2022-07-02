import React from 'react'
import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Button from "./button";
import {Link} from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Moreinfo = () => {
  return (
    <div className="flex">
        <Link to="/profile/writereview" className="mr-[20px]">
          <Button
            svgElement={<VisibilityIcon className="mr-1" />}
            element="Write Review"
            css="flex items-center rounded-lg bg-black px-4 py-2 opacity-100
            text-white right-3 hover:opacity-70
            mt-[2px] hover:bg-gray-500 transition ease-in-out"
          />
        </Link>
        <Link to="/biz" className="mr-[20px]">
          <Button
            svgElement={<AddBusinessIcon className="mr-1" />}
            element="Businesses"
            css="flex items-center rounded-lg bg-rose-600 px-4 py-2 opacity-100
            text-white right-3  hover:opacity-70
            mt-[2px] hover:bg-rose-300 transition-all ease-in-out"
          />
        </Link>
    </div>    
  )
}

export default Moreinfo