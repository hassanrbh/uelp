import React from 'react'
import { useLocation } from 'react-router-dom'
import Business from './business';

const Search = () => {
  const location = useLocation();
  return (
    <div>
      {location?.state?.fetchedBusinesses?.all_businesses?.map((business,_) => (
        <Business business={business} key={_}/>
      ))}
      {location.state.location}
    </div>
  )
}

export default Search