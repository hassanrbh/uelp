import React from 'react'
import { useQuery } from 'react-query'
import IpTracker from "../../../api/ip_info.js"
import UserProfileStatus from './UserProfileStatus.jsx'

const UserProfileInfo = ({firstName,lastName, address}) => {
  const {data, isLoading} = useQuery("API_IP_INFO_TRACKER",() => IpTracker.getPositionStack(address))
  
  return <div className="ml-[31px] mt-[62px]">
    <h1 className="text-3xl font-bold">{`${firstName?.charAt(0).toUpperCase()}${firstName?.slice(1)} ${lastName?.charAt(0).toUpperCase()}.`}</h1>
    <p className="text-[#333] mt-1">From {
      isLoading ? (
        <>loading...</>
        ) : (
        <>{data.data[0]?.label}</>
      )
    }</p>
    <UserProfileStatus />
  </div>
}

export default UserProfileInfo