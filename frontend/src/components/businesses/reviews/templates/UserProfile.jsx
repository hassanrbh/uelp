import React, { useContext } from 'react';
import { UserContext } from '../../../../App.js';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return <div>UserProfile</div>;
};

export default UserProfile;
