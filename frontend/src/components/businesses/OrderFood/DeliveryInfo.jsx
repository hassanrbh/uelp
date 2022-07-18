import React from 'react'

const DeliveryInfo = () => {
  return <div className="flex text-center text-sm mb-5">
    <div className="flex border-r border-gray-200 mr-3 pr-2">
      <p className="font-bold pr-1">$1.75+</p>
      <span className="text-gray-500 font-light">delivery fee</span>
    </div>
    <div className="flex border-r border-gray-200 mr-3 pr-2">
      <p className="font-bold pr-1">$0</p>
      <span className="text-gray-500 font-light">min</span>
    </div>
    <div className="flex border-r border-gray-200 mr-3 pr-2">
    <p className="font-bold pr-1">45-55</p>
      <span className="text-gray-500 font-light">mins</span>
    </div>
  </div>
}

export default DeliveryInfo