import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CableContext } from '../../index';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Tippy from '@tippyjs/react';
import { useQuery } from 'react-query';
import answersService from '../../services/answers.service.js';

const Notifications = () => {
  const value = useContext(CableContext);
  const [count, setCounter] = useState(0);

  const {} = useQuery(['notifications'], answersService.getNotifications, {
    onSuccess: function (response) {
      setCounter(response.count);
    }
  });

  useEffect(() => {
    value?.subscriptions?.create(
      {
        channel: 'NotificationsChannel'
      },
      {
        received: (data) => {
          setCounter(data.count);
        }
      }
    );
  }, [value?.subscriptions]);

  return (
    <Tippy
      content={<span className="font-bold">Notifications</span>}
      interactive={true}
      animation="scale"
      className="relative mr-1 bottom-3"
    >
      <Link
        to="/profile/notifications"
        id="notifications"
        className="2xl:block xl:block mr-[18px]"
        data-count={count ? (count >= 10 ? '9+' : count) : 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer absolute right-12 top-2 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width="28px"
          height="30px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </Link>
    </Tippy>
  );
};

export default Notifications;
