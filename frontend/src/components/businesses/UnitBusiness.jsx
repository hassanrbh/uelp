import React from 'react'
import { useParams } from "react-router-dom";

const UnitBusiness = () => {
  const { business_name } = useParams();

  return (
    <div>{business_name}</div>
  )
}

export default UnitBusiness