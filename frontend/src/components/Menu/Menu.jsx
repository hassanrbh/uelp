import React from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const { menu_name } = useParams()
  return (
    <div>{menu_name}</div>
  )
}

export default Menu