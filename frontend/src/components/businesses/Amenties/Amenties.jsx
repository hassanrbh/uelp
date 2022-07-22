import React from "react";
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
  CreditCardIcon
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faLightbulb,
  fachild,
  famoped,
  fatv,
  faburgerfries,
  fawheelchair,
} from "@fortawesome/free-solid-svg-icons";

const Amenties = () => {
  const business_slug = client.getQueryData(["unit-business"]).profile
    .private_details.name;
  const { data, isLoading, isSuccess, error, isError } = useQuery(
    ["amentys_for", business_slug],
    () => amentyService.getIndex(business_slug)
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>{error}</div>;

  return isSuccess ? (
    <div>
      <h1 className="font-bold text-[1.25rem] mb-4">Amenties and More</h1>
      {Object.keys(data.amenties)
        .slice(0, 4)
        .map((item, _) => (
          <div>{item}</div>
        ))}
      <MoreAmenties data={Object.keys(data.amenties).slice(4, -1)} />
    </div>
  ) : null;
};

export default Amenties;
