import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import Loading from "../reusableComponents/Loading"
import ActionsSegment from "./ActionsSegment";
import Dividor from "../reusableComponents/Dividor";
import OrderFood from "./OrderFood/OrderFood";
import InfoAboutBiz from "./InfoAboutBiz/InfoAboutBiz";
import Menu from "./Menu/Menu";
import MenuInfo from "./Menu/MenuInfo";
import Index from "./BusinesseWorkingHours";
import Amenties from "./Amenties/Amenties";
import HelpYelp from "./HelpYelp/HelpYelp";
import AboutBusiness from "./AboutBusiness/AboutBusiness";
import AskCommunity from "./AskCommunity/AskCommunity";

const UnitBusiness = () => {
  const { business_name } = useParams();
  const { isSuccess, isLoading, isError, error } = useQuery(
    ["unit-business", business_name],
    () => UserService.getBusiness(business_name)
  );

  if (isLoading) return <div className="relative mb-1"><Loading /></div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      {isSuccess ? (
        <div className="container mx-auto flex justify-center mt-5">
          <div>
            <ActionsSegment />
            <Dividor />
            <Menu />
            <MenuInfo />
            <Dividor />
            <Index />
            <Amenties />
            <HelpYelp />
            <Dividor />
            <AboutBusiness />
            <Dividor />
            <AskCommunity />
          </div>
          <div className="sticky top-[19px] h-full">
            <OrderFood />
            <InfoAboutBiz />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UnitBusiness;
