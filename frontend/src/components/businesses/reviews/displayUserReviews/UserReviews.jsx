import React, { useState } from 'react';
import SortReviews from './SortReviews';
import FilterReviews from './FilterReviews';
import { TextField } from '@mui/material';

const UserReviews = () => {
  const [SortItems] = useState([
    'Yelp Sort',
    'Newest First',
    'Oldest First',
    'Highest Rated',
    'Lowest Rated',
    'Elites'
  ]);
  const [FilterItems] = useState([
    '5 stars',
    '4 stars',
    '3 stars',
    '2 stars',
    '1 star',
    'All ratings'
  ]);
  const [activeSortMenuItem, SetActiveSortMenuItem] = useState('Yelp Sort');
  const [SortMenuIsOpen, SortMenuSetIsOpen] = useState(false);
  const [activeFilterMenuItem, SetActiveFilterMenuItem] = useState(undefined);
  const [FilterMenuIsOpen, FilterMenuSetIsOpen] = useState(false);
  const [searchReview, SetSearchReview] = useState('');

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <SortReviews
              FilterItems={SortItems}
              activeMenuItem={activeSortMenuItem}
              SetActiveMenuItem={SetActiveSortMenuItem}
              isOpen={SortMenuIsOpen}
              setIsOpen={SortMenuSetIsOpen}
            />
          </div>
          <div>
            <FilterReviews
              FilterItems={FilterItems}
              activeMenuItem={activeFilterMenuItem}
              SetActiveMenuItem={SetActiveFilterMenuItem}
              isOpen={FilterMenuIsOpen}
              setIsOpen={FilterMenuSetIsOpen}
            />
          </div>
        </div>
        <TextField
          label="Search reviews"
          color="primary"
          value={searchReview}
          variant="outlined"
          margin="normal"
          sx={{ width: 'fit-content' }}
          autoComplete="off"
          onChange={(e) => SetSearchReview(e.target.value)}
          InputProps={{
            className: 'p-0 h-[45px] mt-0 mb-0'
          }}
        />
      </div>
    </div>
  );
};

export default UserReviews;
