import React from 'react'
import { SaveIcon } from '@heroicons/react/outline'

const Save = () => {
  const handleSave = () => {
    console.log("hello");
  }

  return (
    <button onClick={handleSave}className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black">
      <SaveIcon className="h-6 w-6 mr-[6px]"/>
      <p className="font-medium">Save</p>
    </button>
  )
}

export default Save