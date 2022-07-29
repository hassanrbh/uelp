import React from "react";
import { useQuery } from "react-query";
import WorkingHours from "../../../services/working_hours.service";
import Loading from "../../reusableComponents/Loading";
import {useParams} from "react-router-dom"

const HoursOfWorking = () => {
  const { business_name } = useParams();

  const {
    data: working_hours,
    isLoading,
    isSuccess,
  } = useQuery(["working_hours_for", business_name], () =>
    WorkingHours.getWorkingHours(business_name)
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
                <div className="font-[600] text-[16px] mr-4">{working_hours?.working_hours[item][1]} PM</div>
                {((working_hours?.working_hours[item].length === 3)) ? (
                  <div className={`font-bold ${(working_hours?.working_hours[item][2] === "Closed Now") ? "text-red-700" : "text-green-500"}`}>
                    {working_hours?.working_hours[item][2]}
                  </div>
                ) : null}
              </div>
            </>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default HoursOfWorking;
