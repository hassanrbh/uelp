import React, { useState } from 'react';
import Flyer from './flyer';
import UserRating from './UserRating';

const Review = () => {
  const [close, setClose] = useState(false);
  return (
    <div>
      <div className="font-[700] text-[1.25rem]">Recommended Reviews</div>
      <Flyer close={close} setClose={setClose} />
      <UserRating />
    </div>
  );
};

export default Review;
