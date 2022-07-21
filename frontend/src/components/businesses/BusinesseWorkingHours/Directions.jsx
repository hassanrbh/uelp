import React from 'react'
import client from "../../../services/react-query";
import GetDirection from "../CustomButtons/GetDirection"

const Directions = () => {
  const business_details = client.getQueryData(["unit-business"]).profile.business_details;

  return (
    <div className="flex mt-3 justify-between">
      <div>
        <p className="font-bold text-sm text-teal-500">{business_details.address}</p>
        <p className="text-sm font-light">{business_details.address_1}</p>
      </div>
      <GetDirection />
    </div>
  )
}

export default Directions