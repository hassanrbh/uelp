import React from "react";
import { Link } from "react-router-dom";
import client from "../../../services/react-query"
import {
  PencilIcon,
} from "@heroicons/react/outline";

const EditBusinessInfoB = () => {
  const name = client.getQueryData(["unit-business"]).profile.private_details.name;

  return <Link to={`/biz_attributes?biz_id=${name}`} className="flex flex-row-reverse mt-1 pr-[70px]">
    <p className="text-teal-500 font-bold">Edit Business Info</p>
    <PencilIcon width={18}
            height={18}
            className="font-bold cursor-pointer text-teal-500 mr-1 relative top-[3px]" />
  </Link>;
};

export default EditBusinessInfoB;
