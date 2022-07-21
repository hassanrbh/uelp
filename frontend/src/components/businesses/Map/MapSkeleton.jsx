import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from '../../reusableComponents/Loading';

const MapSkeleton = () => {
  return (
    <div className="relative">
      <Skeleton width={"30vh"} height={"20vh"} enableAnimation={true}/>
      <Loading className="relative bottom-[135px] left-[55px] z-20"/>
    </div>
  )
}

export default MapSkeleton