import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";

const UnitBusiness = () => {
  const { business_name } = useParams();

  return (
    <div>{business_name}</div>
  )
}

export default UnitBusiness



