import React, { useState } from 'react';
import Rating from 'react-rating';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Review from './Review';

const RateReview = () => {
  const { business_name } = useParams();
  const navigate = useNavigate();

  const gotoRate = (e) => {
    // localStorage.setItem(
    //   `rating_${business_name}`,
    //   JSON.stringify({ rate: { rate: e, backgroundColor } })
    // );
    navigate(`/writereview/biz/${business_name}`, {
      state: { rate: e }
    });
  };

  return (
    <div className="min-w-[394px]">
      <Review gotoRate={gotoRate} />
      <Link
        to={`/writereview`}
        className="text-[#027a97] hover:underline text-sm cursor-pointer block"
      >
        Start your review of <span className="font-bold">{business_name}</span>
      </Link>
    </div>
  );
};

export default RateReview;
