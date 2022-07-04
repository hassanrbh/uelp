import React from 'react'
import { Link } from "react-router-dom";

const LeftNav = ({className}) => {
  return (
    <Link to="/" className="h-0 2xl:block xl:block lg:block">
      <img src={require("../../assets/images/Yelp_Logo.svg.png")} 
              alt="logo yelp" 
                className={className}></img>
    </Link>
  )
}

export default LeftNav