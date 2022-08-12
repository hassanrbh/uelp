import React, { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Dividor from '../reusableComponents/Dividor';
import Review from '../businesses/reviews/templates/Review';

const WriteReview = () => {
  const location = useLocation();
  const { business } = useParams();
  const [currentStar, setCurrentStar] = useState(undefined);
  const [currentStatusStar, setCurrentStatus] = useState('');

  return (
    <div>
      <Dividor />
      <div>
        <main className="container ml-[400px] mr-[400px] max-w-[700px]">
          <div className="flex justify-between items-center">
            <Link
              to={`/biz/${business}`}
              className="font-bold text-[rgba(45,46,47,1)] text-[28px] hover:underline"
            >
              {business}
            </Link>
            <Link
              to={`/review-guidelines`}
              className="text-[rgba(2,122,151,1)] font-semibold text-sm hover:underline"
            >
              Read our review guidelines
            </Link>
          </div>
          <div className="w-full h-fit border border-[rgba(200,201,202,1)] rounded-md mt-5 p-6">
            <div className="flex items-center">
              <Review
                rate={location.state.rate}
                currentStar={currentStar}
                gotoRate={setCurrentStar}
                setCurrentStatus={setCurrentStatus}
              />
              <p className="text-sm relative bottom-1 ml-1">
                {currentStatusStar}
              </p>
            </div>
            <input type="textarea" className="w-full" placeholder="Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There`s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can`t go wrong. Not much else to say besides go see for yourself! You won't be disappointed. " />
          </div>
        </main>
      </div>
    </div>
  );
};

export default WriteReview;
