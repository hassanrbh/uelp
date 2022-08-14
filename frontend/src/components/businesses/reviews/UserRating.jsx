import React from 'react';
import UserProfile from './templates/UserProfile';
import RateReview from './templates/RateReview';
import Dividor from '../../reusableComponents/Dividor';
import { useQuery, useMutation } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import draftService from '../../../services/draft.service.js';
import reviewService from '../../../services/reviews.service.js';
import ReviewDraft from './draft/ReviewDraft';
import ReviewStatus from './status/ReviewStatus';
import UserReviews from './displayUserReviews/UserReviews';

const UserRating = () => {
  const { business_name } = useParams();

  const { data, isSuccess, refetch } = useQuery(
    ['drafts_for_', business_name],
    () => draftService.showDrafts(business_name)
  );

  const reviews = useQuery(['reviews_for_', business_name], () =>
    reviewService.getAllReviews(business_name)
  );

  const handleDeleteDraft = () => {
    const draft_id = data.drafts[0].id;
    mutate(draft_id);
  };

  const { mutate } = useMutation(
    (draft_id) => draftService.deleteDraft(business_name, draft_id),
    {
      onSuccess: () => {
        refetch();
      }
    }
  );

  return (
    <>
      <div className="rating mt-7 bg-white h-fit w-full rounded p-6">
        <div className="flex justify-between items-center">
          <UserProfile />
          <RateReview data={data} isSuccess={isSuccess} />
        </div>
        {isSuccess ? (
          data.drafts.length >= 1 ? (
            <div>
              <Dividor />
              {data.drafts.map((review, idx) => (
                <>
                  <div className="flex gap-2 ">
                    <ReviewDraft star={review.rating} />
                    <p className="text-sm font-[400] text-gray-500">
                      Started on {review.created_at}
                    </p>
                  </div>
                  <div className="mt-5 flex gap-7 items-center">
                    <Link
                      to={`/writereview/biz/${business_name}`}
                      state={{ rate: review.rating }}
                      className="border border-[#c8c9ca] px-[16px] py-[8px] rounded text-black font-medium hover:bg-gray-200 ease-in-out duration-700"
                    >
                      Finish My Review
                    </Link>
                    <Link
                      className="font-[500] text-[rgba(2,122,151,1)] text-sm hover:underline"
                      to={`/biz/${business_name}`}
                      onClick={handleDeleteDraft}
                    >
                      Remove draft
                    </Link>
                  </div>
                </>
              ))}
            </div>
          ) : null
        ) : null}
      </div>
      <ReviewStatus reviews={reviews} />
      <UserReviews />
    </>
  );
};

export default UserRating;
