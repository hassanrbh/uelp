import React from 'react'
import UserProfileLogo from './UserProfileLogo'
import UserProfileLinks from "./UserProfileLinks"
import UserProfileInfo from './UserProfileInfo'

const UserProfile = ({user}) => {
  return (
    <div className="flex mt-[24px] absolute">
      <UserProfileLogo avatar={user?.avatar}/>
      <div className="flex">
        <UserProfileInfo zip={user.zip_code} userInfo={user.username}/>
      </div>
    </div>
  )
}

export default UserProfile