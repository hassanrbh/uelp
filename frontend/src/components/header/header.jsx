import React from 'react'
import LeftNav from './left_nav'
import RightNav from './right_nav'
import Search from './search'

const Header = () => {
  return (
    <div className="mx-auto m-4">
      <div className="flex justify-between">
        <LeftNav />
        <Search />
        <RightNav />
      </div>
    </div>
  )
}

export default Header