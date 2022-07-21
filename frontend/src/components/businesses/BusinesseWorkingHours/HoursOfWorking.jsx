import React from "react";
import { useQuery } from "react-query";
import client from "../../../services/react-query";
import WorkingHours from "../../../services/working_hours.service"
import Loading from "../../reusableComponents/Loading"

const HoursOfWorking = () => {
  const name = client.getQueryData(["unit-business"]).profile.private_details.name;
  const {data, isLoading, isSuccess} = useQuery(["working_hours_for", name], () => WorkingHours.getWorkingHours(name))

  if (isLoading) return <Loading />

  return isSuccess ? console.log(data) : null
};

export default HoursOfWorking;
