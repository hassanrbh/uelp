import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'

const Following = () => {
  const handleFollow = () => {
    console.log("hello world");
  }
  return (
    <button onClick={handleFollow}className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black">
      <PlusIcon className="h-6 w-6 mr-[6px]"/>
      <p className="font-medium">Save</p>
    </button>
  )
}

export default Following