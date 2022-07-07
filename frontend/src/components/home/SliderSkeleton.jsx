import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SliderSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((_, idx) => <div className="flex flex-col" key={idx}>
    <div className=""> 
      <Skeleton width={288} height={250} enableAnimation={true} />
    </div>
    <div className="mt-2">
      <Skeleton  count={2} />
    </div>
  </div>)
  )
}

export default SliderSkeleton