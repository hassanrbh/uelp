import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import SubHeader from "./subHeader";
import ActionsSegment from "./ActionsSegment";
import Dividor from "../reusableComponents/Dividor";

const UnitBusiness = () => {
  const { business_name } = useParams();
  const { data, isSuccess, isLoading, isError, error } = useQuery(
    ["unit-business"],
    () => UserService.getBusiness(business_name)
  );

  if (isLoading) return <div>loading ...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      {isSuccess ? (
        <>
          {/* <SubHeader /> */}
          <div className="container mx-auto">
            <div>
              <ActionsSegment />
              <Dividor />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UnitBusiness;
