import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import ActionsSegment from "./ActionsSegment";
import Dividor from "../reusableComponents/Dividor";
import OrderFood from "./OrderFood/OrderFood";
import InfoAboutBiz from "./InfoAboutBiz/InfoAboutBiz";
import Menu from "./Menu/Menu";
import MenuInfo from "./Menu/MenuInfo";
import Index from "./BusinesseWorkingHours";

const UnitBusiness = () => {
  const { business_name } = useParams();
  const { isSuccess, isLoading, isError, error } = useQuery(
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
          <div className="container mx-auto flex justify-center mt-5">
            <div>
              <ActionsSegment />
              <Dividor />
              <Menu />
              <MenuInfo />
              <Dividor />
              <Index />
            </div>
            <div className="top-0 sticky">
              <OrderFood />
              <InfoAboutBiz />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UnitBusiness;
