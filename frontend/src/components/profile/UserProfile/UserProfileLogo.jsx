import React from 'react'
import client from '../../../services/react-query';
import {Link} from "react-router-dom";

const UserProfileLogo = ({avatar}) => {
  return <Link to="/user_photos/change">
    <img src={avatar} alt="profile Logo" className="border-2 border-black h-[213px] w-[210px] rounded-md"/>
  </Link>
}

export default UserProfileLogo