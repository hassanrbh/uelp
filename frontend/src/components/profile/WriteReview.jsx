import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const WriteReview = () => {
  const location = useLocation();
  const { business } = useParams();

  return <div>{business}</div>;
};

export default WriteReview;
