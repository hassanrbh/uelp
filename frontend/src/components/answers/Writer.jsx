import React from 'react';
import { Link } from 'react-router-dom';

const Writer = ({ writer, created_at }) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, -5);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        <img
          class="inline-block h-10 w-10 rounded-full ring-2 ring-white mr-2"
          src={writer?.avatar}
          alt={writer?.username}
        />
        <div className="block">
          <Link
            to={`/user_details?username=${writer?.username}`}
            className="font-bold hover:underline"
          >
            Mr {capitalize(writer?.username)}.
          </Link>
          <div className="flex gap-2">
            <div className="text-[rgba(110,112,114,1)] font-[500] text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {writer?.friends}
            </div>
            <div className="text-[rgba(110,112,114,1)] font-[500] text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              {writer?.reviews}
            </div>
            <div className="text-[rgba(110,112,114,1)] font-[500] text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {writer?.business_images}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[rgba(110,112,114,1)] text-sm ">{created_at}</div>
    </div>
  );
};

export default Writer;
