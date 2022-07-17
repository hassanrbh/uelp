import React from 'react'
import client from '../../../services/react-query';
const Images = () => {
  const images = client.getQueryData(["unit-business"]).profile.images.images

  return (
    <p></p>
  )
}

export default Images