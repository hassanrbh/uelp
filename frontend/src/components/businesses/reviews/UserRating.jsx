import React from 'react';
import UserProfile from './templates/UserProfile';
import RateReview from './templates/RateReview';

const UserRating = () => {
  return (
    <div className="rating mt-7 bg-white h-[100px] w-full flex rounded p-6 justify-between">
      <UserProfile />
      <RateReview />
    </div>
  );
};

export default UserRating;
