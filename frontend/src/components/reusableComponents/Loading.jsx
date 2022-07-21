import React from 'react'

const Loading = ({className}) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="loading-spinner">
      </div>
    </div>
  )
}

export default Loading