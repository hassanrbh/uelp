import React from 'react'
import { useQuery } from 'react-query';
import userService from '../../services/auth.service';
import Slider from "./slider";
import SliderSkeleton from './SliderSkeleton';

const LatestHotBusinesses = () => {
  const { data, error, isSuccess , isError, isLoading} = useQuery("latest_businesses", userService.getLatestBusinesses);

  if (isLoading) return <SliderSkeleton cards={15}/>

  if (isError) return <div>{error}</div>

  return isSuccess ? data.all_businesses.map((business,idx) => (
    <Slider business={business} key={idx}/>
  )): null
  
}

export default LatestHotBusinesses;