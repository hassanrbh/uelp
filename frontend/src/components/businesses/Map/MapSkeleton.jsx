import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from '../../reusableComponents/Loading';

const MapSkeleton = () => {
  return (
    <div className="relative">
      <Skeleton width={315} height={150} enableAnimation={true}/>
      <Loading className="relative bottom-[107px] left-[55px] z-20"/>
    </div>
  )
}

export default MapSkeleton