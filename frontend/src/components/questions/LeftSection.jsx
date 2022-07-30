import React from "react";
import Divider from "../reusableComponents/Dividor";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const LeftSection = () => {
  const { business_name } = useParams();
  const { data: questions, isSuccess, isLoading } = useQuery(["questions_no_answered", business_name], () => );

  return (
    <div className="font-bold text-xl">
      <h1>Can you answer these questions?</h1>
      <Divider />
      <p className="font-[400px] text-sm text-[rgba(2,122,151,1)]">
        No More Questions To reply :)
      </p>
    </div>
  );
};

export default LeftSection;
