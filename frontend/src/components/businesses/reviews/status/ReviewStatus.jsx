import React from 'react';
import ReviewDraft from '../draft/ReviewDraft';

const ReviewStatus = ({ reviews }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-sm mb-1">Overall rating</h2>
        <ReviewDraft star={reviews?.data?.overall_rating} size={35} />
        <p className="font-medium text-base mt-1">
          {reviews?.data?.reviews} reviews
        </p>
      </div>
      <div className="flex_basis">
        <div class="flex items-center mt-4">
          <span class="text-sm font-[300]">5 stars</span>
          <div class="mx-4 w-[80%] h-[10px] bg-gray-200 rounded dark:bg-gray-100">
            <div
              class="h-[10px] bg-red-500 rounded"
              style={{ width: `${reviews?.data?.five_star}%` }}
            ></div>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-[300]">4 stars</span>
          <div class="mx-4 w-[80%] h-[10px] bg-gray-200 rounded dark:bg-gray-100">
            <div
              class="h-[10px] bg-orange-600 rounded"
              style={{ width: `${reviews?.data?.four_star}%` }}
            ></div>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-[300]">3 stars</span>
          <div class="mx-4 w-[80%] h-[10px] bg-gray-200 rounded dark:bg-gray-100">
            <div
              class="h-[10px] bg-orange-500 rounded"
              style={{ width: `${reviews?.data?.three_star}%` }}
            ></div>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-[300]">2 stars</span>
          <div class="mx-4 w-[80%] h-[10px] bg-gray-200 rounded dark:bg-gray-100">
            <div
              class="h-[10px] bg-orange-300 rounded"
              style={{ width: `${reviews?.data?.two_star}%` }}
            ></div>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-[300] ">1 stars</span>
          <div class="mx-4 w-[80%] h-[10px] bg-gray-200 rounded dark:bg-gray-100">
            <div
              class="h-[10px] bg-yellow-300 rounded"
              style={{ width: `${reviews?.data?.one_star}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStatus;
