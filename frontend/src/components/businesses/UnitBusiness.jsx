import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import UserService from '../../services/auth.service';
import Loading from '../reusableComponents/Loading';
const ActionsSegment = React.lazy(() => import('./ActionsSegment'));
const Dividor = React.lazy(() => import('../reusableComponents/Dividor'));
const OrderFood = React.lazy(() => import('./OrderFood/OrderFood'));
const InfoAboutBiz = React.lazy(() => import('./InfoAboutBiz/InfoAboutBiz'));
const Menu = React.lazy(() => import('./Menu/Menu'));
const MenuInfo = React.lazy(() => import('./Menu/MenuInfo'));
const Index = React.lazy(() => import('./BusinesseWorkingHours/index'));
const Amenties = React.lazy(() => import('./Amenties/Amenties'));
const HelpYelp = React.lazy(() => import('./HelpYelp/HelpYelp'));
const AboutBusiness = React.lazy(() => import('./AboutBusiness/AboutBusiness'));
const AskCommunity = React.lazy(() => import('./AskCommunity/AskCommunity'));
const Reviews = React.lazy(() => import('../reviews/Reviews'));

const UnitBusiness = () => {
  const { business_name } = useParams();
  const { isSuccess, isLoading, isError, error } = useQuery(
    ['unit-business', business_name],
    () => UserService.getBusiness(business_name)
  );

  if (isLoading) return <Loading />;
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
            <Dividor />
            <Reviews />
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
