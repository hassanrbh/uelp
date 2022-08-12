import React from 'react';
import { useLocation } from 'react-router-dom';

const WriteReview = () => {
  const location = useLocation();
  console.log(location);
  return <div>WriteReview</div>;
};

export default WriteReview;
