import React, { useState } from "react";
import { useQuery } from "react-query";
import client from "../../../services/react-query";
import WorkingHours from "../../../services/working_hours.service";
import Loading from "../../reusableComponents/Loading";

const HoursOfWorking = () => {
  const name = client.getQueryData(["unit-business"]).profile.private_details
    .name;
  const {
    data: working_hours,
    isLoading,
    isSuccess,
  } = useQuery(["working_hours_for", name], () =>
    WorkingHours.getWorkingHours(name)
  );

  if (isLoading) return <Loading />;
  return isSuccess ? (
    <div>
      {Object.keys(working_hours?.working_hours).map((item, _) => (
        <div className="flex mt-2" key={_}>
          <div className="font-[600] text-[16px] min-w-[60px]">{item}</div>
          <div className="flex">
            <>
              <div className="flex min-w-[60px]">
                <div className="font-[600] text-[16px]">{working_hours?.working_hours[item][0]} AM</div>
                <div className="min-w-[20px] ml-3">-</div>
                <div className="font-[600] text-[16px]">{working_hours?.working_hours[item][1]} PM</div>
              </div>
            </>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default HoursOfWorking;
