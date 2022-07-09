import React from 'react'

const Business = ({business}) => {
  return (
    <div>{business.profile.private_details.name}</div>
  )
}

export default Business