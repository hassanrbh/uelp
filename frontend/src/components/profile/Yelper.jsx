import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Yelper = () => {
  const [searchParams] = useSearchParams();

  return (
    <div>
      {searchParams.get("username")}
    </div>
  )
}

export default Yelper