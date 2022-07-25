import React from 'react'
import { CameraIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const AddPhoto = () => {
  return <Link to="/biz_user_photos" className="flex border border-[#c8c9ca] hover:bg-gray-200 ease-in-out duration-700 px-[16px] py-[7px] rounded text-black">
    <CameraIcon className="h-6 w-6 mr-[6px]"/>
    <p className="font-medium">Add Photo</p>
  </Link>
}

export default AddPhoto