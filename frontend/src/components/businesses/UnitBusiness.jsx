import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import SubHeader from "./subHeader";
import ActionsSegment from "./ActionsSegment";
import Dividor from "../reusableComponents/Dividor";
import OrderFood from "./OrderFood/OrderFood";

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
          <div className="container mx-auto grid grid-cols-2">
            <div>
              <ActionsSegment />
              <Dividor />
            </div>
            <div className="">
              <OrderFood />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UnitBusiness;
