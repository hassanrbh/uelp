import React from 'react'
import { useQuery } from 'react-query';
import userService from '../../services/auth.service';
import Slider from "./slider";

const LatestHotBusinesses = () => {
  const { data, error, isSuccess , isError, isLoading} = useQuery("latest_businesses", userService.getLatestBusinesses);

  if (isLoading) (
      <svg
      className="animate-spin"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.293-3.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H12c-.34 0-.872.11-1.29.412-.368.264-.71.714-.71 1.588 0 .874.342 1.324.71 1.588.418.302.95.412 1.29.412.368 0 .945-.128 1.37-.473a1 1 0 0 1 1.26 1.554c-.87.705-1.93.919-2.63.919a4.35 4.35 0 0 1-2.46-.788C8.659 15.576 8 14.526 8 13c0-1.526.658-2.576 1.54-3.212A4.35 4.35 0 0 1 12 9h.586l-.293-.293z"
        clipRule="evenodd"
      />
    </svg>
  )

  if (isError) return <div>{error}</div>

  return isSuccess ? data.map((business) => (
    <>
      <Slider business={business}/>
    </>
  )): null
}

export default LatestHotBusinesses;