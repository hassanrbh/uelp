import React from 'react'

const AddressInfo = ({business_details}) => {
  return (
    <div>
      <span className="font-bold block">{business_details?.address_1}</span>
      <span className="font-bold block">{business_details?.address_2}</span>
      <span className="font-bold block">{business_details.address}</span>
      <span className="font-bold block">{business_details.city}</span>
      <span className="font-bold block">{business_details.state}</span>
      <span className="font-bold block">{business_details.country}</span>
    </div>
  )
}

export default AddressInfo