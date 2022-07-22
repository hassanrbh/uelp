import React from "react";
import { useQuery } from "react-query";
import client from "../../../services/react-query";
import amentyService from "../../../services/amenty.service";
import Loading from "../../reusableComponents/Loading";

const Amenties = () => {
  const business_slug = client.getQueryData(["unit-business"]).profile.private_details.name;
  const {data, isLoading, isSuccess, error, isError} = useQuery(["amentys_for", business_slug], () => amentyService.getIndex(business_slug));

  if (isLoading) return <Loading />
  if (isError) return <div>{error}</div>;

  return (
    <div>
      <h1 className="font-bold text-[1.25rem] mb-4">Amenties and More</h1>
    </div>
  );
};

export default Amenties;
