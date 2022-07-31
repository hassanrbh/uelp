import React from "react";
import {
  VolumeUpIcon,
  ThumbUpIcon,
  WifiIcon,
  UserGroupIcon,
  CheckIcon,
  EmojiHappyIcon,
  GlobeAltIcon,
  XIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBasketShopping,
  faLightbulb,
  faChild,
  faTv,
  faBurger,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";


const SetEmogies = ({item, data, className, classNameNo}) => {
  const check_item_icon = (icon) => {
    if (icon === "many_vegeterian_options" || icon === "offers_catering") return <CheckIcon className={className} /> 
    if (icon === "offers_delivery") {
      return <TruckIcon className={className} />
    } else if (icon === "vegan_options") {
      return <FontAwesomeIcon icon={faUtensils} className={className} />
    } else if (icon === "offers_takeout") {
      return <FontAwesomeIcon icon={faBasketShopping} className={className} />
    } else if (icon === "accept_credit_cards") {
      return <CreditCardIcon className={className} />
    } else if (icon === "casual") {
      return <FontAwesomeIcon icon={faLightbulb} className={className} />
    } else if (icon === "tv") {
      return <FontAwesomeIcon icon={faTv} className={className} />
    } else if (icon === "free_wifi") {
      return <WifiIcon className={className} />
    } else if (icon === "moderate_noise") {
      return <VolumeUpIcon className={className} />
    } else if (icon === "good_for_lunch_and_dinner") {
      return <ThumbUpIcon className={className} />
    } else if (icon === "good_for_kids") {
      return <FontAwesomeIcon icon={faChild} className={className} />
    } else if (icon === "private_lot_parking") {
      return <GlobeAltIcon className={className}/>
    } else if (icon === "good_for_groups") {
      return <UserGroupIcon className={className}/>
    } else if (icon === "wheelchar_accessible") {
      return <FontAwesomeIcon icon={faWheelchair} className={className} />
    } else if (icon === "good_for_lunch") {
      return <FontAwesomeIcon icon={faBurger} className={className} />
    } else if (icon === "gendar_neutral_rooms") {
      return <EmojiHappyIcon className={className}/>
    }
  }

  const check_item = (item_icon) => {
    return (item === item_icon && data[item] === true) ? (
      check_item_icon(item_icon)
    ) : <XIcon className={classNameNo} />
  }

  return check_item(item)

};
export default SetEmogies;
