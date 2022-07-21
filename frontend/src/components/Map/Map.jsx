import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const Map = () => {
  const { business_address } = useParams();
  const location = useLocation();

  return <div>
    <Link to={`/${location.hash.slice(1)}/${business_address}`}>      
      Back 
    </Link>
    <h1>{business_address}</h1>
  </div>;
};

export default Map;
