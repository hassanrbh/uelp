import React from 'react'

const OrLineUp = () => {
  return (
    <div className="relative my-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-500"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-2 bg-white text-sm font-bold text-gray-500"> OR </div>
        </div>
    </div>
  )
}

export default OrLineUp