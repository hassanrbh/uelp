import React from 'react'
import { Link } from 'react-router-dom'
import { BeakerIcon } from '@heroicons/react/outline'
import client from '../../../services/react-query'

const FullMenu = () => {
  const business_name = client.getQueryData(["unit-business"]).profile.private_details.name;
  return (
    <Link
      to={`/menu/${business_name}`}
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black"
    >
      <BeakerIcon className="h-6 w-6 mr-[6px]" />
      <p className="font-medium">Website menu</p>
    </Link>
  )
}

export default FullMenu