import React from 'react'
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <Link to="/">
      <img src={require("../../assets/images/Yelp_Logo.svg.png")} 
              alt="logo yelp" 
                className="w-15 h-9 pr-5 relative left-8"></img>
    </Link>
  )
}

export default LeftNav