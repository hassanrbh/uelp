import React from 'react'
import { useLocation } from 'react-router-dom'
import Business from './business';

const Search = () => {
  const location = useLocation();
  return (
    <div>
      {location.state.all_businesses.map((business,_) => (
        <Business business={business} key={_}/>
      ))}
    </div>
  )
}

export default Search