import React from 'react'

const HelpYelp = () => {
  // need maintenance
  return (
    <div>
      <h1 className="font-bold text-[1.25rem] mb-4">Help Improve Yelp</h1>
      <p className="font-bold mb-2">Can you bring your own container to this business to help reduce waste?</p>
      <div className="flex">
        <button className="border border-[#c8c9ca] hover:bg-gray-200 mr-2 ease-in-out duration-700 px-[16px] py-[7px] rounded text-black font-medium">Yes</button>
        <button className="border border-[#c8c9ca] hover:bg-gray-200 mr-2 ease-in-out duration-700 px-[16px] py-[7px] rounded text-black font-medium">Non</button>
        <button className="border border-[#c8c9ca] hover:bg-gray-200 mr-2 ease-in-out duration-700 px-[16px] py-[7px] rounded text-black font-medium">Not Sure</button>
      </div>
    </div>
  )
}

export default HelpYelp