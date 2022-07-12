import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import SubHeader from './subHeader';

const UnitBusiness = () => {
  const { business_name } = useParams();
  const {
    data,
    isSuccess,
    isLoading,
    isError,
    error
  } = useQuery(["unit-business"], () => UserService.getBusiness(business_name));

  if (isLoading) return <div>loading ...</div>  
  if (isError) return <div>{error}</div>

  return (
    <>
    {isSuccess ? (
      <>
        {/* <div>{data?.profile?.private_details.name}</div> */}
        <SubHeader />
      </>
    ): null}
    </>
  )
}

export default UnitBusiness



