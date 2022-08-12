import React, { useContext } from 'react';
import { UserContext } from '../../../../App.js';
import { MagicUsername } from '../../../../utils/magic_username';
import { CapitalizeAddressWithNumbers } from '../../../../utils/capitalizeAddress';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex">
      <div>
        <img
          class="inline-block h-[64px] w-[64px] rounded-full ring-2 ring-white align-middle"
          src={currentUser?.avatar}
          alt={currentUser.username}
        />
      </div>
      <div className="ml-3">
        <Link
          className="font-bold hover:underline"
          to={`/user_details?username=${currentUser?.username}`}
        >
          {MagicUsername(currentUser?.first_name, currentUser?.last_name)}
        </Link>
        <p className="text-sm font-normal text-[rgba(45,46,47,1)]">
          {CapitalizeAddressWithNumbers(currentUser?.address)}
        </p>
        <div className="flex gap-2 mt-1">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[16px] w-[16px] text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-sm relative bottom-[2.1px] font-[700]">
              {currentUser?.friends}
            </p>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[16px] w-[16px] text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="text-gray-500 text-sm relative bottom-[2.1px]  font-[700]">
              {currentUser?.reviews}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
