import React from 'react'
import FullMenu from '../CustomButtons/FullMenu'
import WebsiteMenu from '../CustomButtons/WebsiteMenu'

const MenuInfo = () => {
  return (
    <div className="flex gap-5 mb-5 mt-6">
      <WebsiteMenu />
      <FullMenu />
    </div>
  )
}

export default MenuInfo