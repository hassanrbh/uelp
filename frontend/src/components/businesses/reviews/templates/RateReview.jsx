import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Review from './Review';
import { useMutation, useQuery } from 'react-query';
import draftService from '../../../../services/draft.service.js';

const RateReview = ({ data, isSuccess }) => {
  const { business_name } = useParams();
  const navigate = useNavigate();
  const { mutate } = useMutation((data) =>
    draftService.draftReview(business_name, data)
  );

  const gotoRate = (e) => {
    mutate({
      drafts: {
        rating: e
      }
    });

    navigate(`/writereview/biz/${business_name}`, {
      state: { rate: e }
    });
  };

  return (
    <div className="min-w-[394px]">
      {isSuccess ? (
        data.drafts.length >= 1 ? (
          <p className="font-normal text-sm">
            Finish your review of{' '}
            <span className="font-bold">{business_name}</span>
          </p>
        ) : (
          <>
            <Review gotoRate={gotoRate} />
            <Link
              to={`/writereview`}
              className="text-[#027a97] hover:underline text-sm cursor-pointer block"
            >
              Start your review of{' '}
              <span className="font-bold">{business_name}</span>
            </Link>
          </>
        )
      ) : null}
    </div>
  );
};

export default RateReview;
