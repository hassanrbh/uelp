import React from 'react'
import client from '../../react-query';

const SubHeader = () => {
  const images = client.getQueryData(["unit-business"]).profile.images.thumbnail

  return (
    <div>SubHeader</div>
  )
}

export default SubHeader