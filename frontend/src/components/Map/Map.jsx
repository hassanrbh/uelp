import React from "react";
import { useParams } from "react-router-dom";

const Map = () => {
  const { business_address } = useParams();

  return <div>
    <h1>{business_address}</h1>
  </div>;
};

export default Map;
