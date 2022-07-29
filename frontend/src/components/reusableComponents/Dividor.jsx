import React from 'react'

const Dividor = ({className}) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className={` ${className} flex-grow border-t border-gray-200`}></div>
    </div>
  )
}

export default Dividor