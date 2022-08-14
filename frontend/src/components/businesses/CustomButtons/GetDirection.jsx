import React from 'react';
import { Link } from 'react-router-dom';
import client from '../../../services/react-query';
import { useParams } from 'react-router-dom';

const GetDirection = () => {
  const { business_name } = useParams();
  const address = client.getQueryData(['unit-business', business_name]).profile
    ?.business_details?.address;

  return (
    <Link
      to={`/map/directions/${address}#biz`}
      className="flex border border-[#c8c9ca] px-[16px] py-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700"
    >
      <p className="font-medium">Get Directions</p>
    </Link>
  );
};

export default GetDirection;
