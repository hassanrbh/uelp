import React from "react";
import { Link,useParams } from "react-router-dom";
import {
  PencilIcon,
} from "@heroicons/react/outline";


const EditBusinessInfoB = () => {
  const { business_name } = useParams();

  return <Link to={`/biz_attributes?biz_id=${business_name}`} className="flex flex-row-reverse mt-2 pr-[190px]">
    <p className="text-teal-500 font-bold">Edit Business Info</p>
    <PencilIcon width={18}
            height={18}
            className="font-bold cursor-pointer text-teal-500 mr-1 relative top-[3px]" />
  </Link>;
};

export default EditBusinessInfoB;
