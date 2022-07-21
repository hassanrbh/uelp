import React from 'react'
import client from "../../../services/react-query";

const Directions = () => {
  const business_details = client.getQueryData(["unit-business"]).profile.business_details;
  return (
    <div className="flex">
      <p>Adderess here</p>
      <button>Button Here</button>
    </div>
  )
}

export default Directions