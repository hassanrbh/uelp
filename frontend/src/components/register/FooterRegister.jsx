import React from 'react'
import { Link } from 'react-router-dom'
import AllOmniAuth from '../login/allOmniAuth'
import OrLineUp from '../login/OrLineUp'

const FooterRegister = ({setIsToggle, toggle}) => {
  return (
    <div className="mt-[117px] text-center">
      <h1 className="text-red-600 font-bold text-2xl mt-1">Sign Up for Yelp</h1>
      <h2 className="font-bold text-sm mt-1">
        Connect with great local businesses
        <button onClick={() => setIsToggle(!toggle)} className="text-blue-400 font-semibold pl-1"> 
          Log in
        </button>
      </h2>
      <p className="text-sm p-1 mb-3">
        By registering, you agree to Uelp's
        <Link to="/terms-of-service">
          <span className="text-blue-700 text-xs p-1">Terms of Service</span>
        </Link>
        <br />
        <Link to="/privacy-policy">
          and
          <span className="text-blue-700 text-xs pl-1">Privacy Policy</span>
        </Link>
      </p>
      <AllOmniAuth />
      <OrLineUp />
    </div>
  )
}

export default FooterRegister