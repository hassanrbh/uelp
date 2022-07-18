import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const location = useLocation();
  let { type, captureAddress } = location.state;

  return (
    <div>
      {type}
      {captureAddress}
    </div>
  )
}

export default Order