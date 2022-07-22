import React, { useState } from "react";
import { useQuery } from "react-query";
import client from "../../../services/react-query";
import amentyService from "../../../services/amenty.service";
import Loading from "../../reusableComponents/Loading";
import MoreAmenties from "./MoreAmenties";
import {
  VolumeUpIcon,
  ThumbUpIcon,
  WifiIcon,
  UserGroupIcon,
  CheckIcon,
  EmojiHappyIcon,
  GlobeAltIcon,
  GiftIcon,
  ScaleIcon,
  XIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBasketShopping,
  faLightbulb,
  fachild,
  fatv,
  faburgerfries,
  fawheelchair,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "../../reusableComponents/Dividor"

const Amenties = () => {
  const business_slug = client.getQueryData(["unit-business"]).profile
    .private_details.name;
  const { data, isLoading, isSuccess, error, isError } = useQuery(
    ["amentys_for", business_slug],
    () => amentyService.getIndex(business_slug)
  );
  const [toggle, setToggle] = useState(false);

  if (isLoading) return <Loading />;
  if (isError) return <div>{error}</div>;

  const CapitalizeWords = (str) => {
    const words = str.split(" ");
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

  return isSuccess ? (
    <div>
      <h1 className="font-bold text-[1.25rem] mb-4">Amenties and More</h1>
      <div className="grid grid-cols-2 gap-3">
        {Object.keys(data.amenties)
          .slice(0, 4)
          .map((item, _) => (
            <div className="text-[17px] font-medium flex">
              {item === "offers_delivery" ? <TruckIcon className="h-6 w-6 mr-3"/> : null}
              {item === "vegan_options" ? <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 mr-3"/> : null}
              {item === "offers_takeout" ? <FontAwesomeIcon icon={faBasketShopping} className="h-6 w-6 mr-3"/> : null}
              {item === "accept_credit_cards" ? <CreditCardIcon className="h-6 w-6 mr-3"/> : null}
              {CapitalizeWords(item.replace(/[|&;$_%@"<>()+,]/g, " "))}
            </div>
          ))}
        {toggle ? (
          <>
            {Object.keys(data.amenties)
              .slice(4, -1)
              .map((item, _) => (
                <div className="text-[16px] font-[600]">
                  {CapitalizeWords(item.replace(/[|&;$_%@"<>()+,]/g, " "))}
                </div>
              ))}
          </>
        ) : null}
      </div>
      <MoreAmenties
        count={Object.keys(data.amenties).slice(4, -1).length}
        setToggle={setToggle}
        toggle={toggle}
      />
      <Divider />
    </div>
  ) : null;
};

export default Amenties;
