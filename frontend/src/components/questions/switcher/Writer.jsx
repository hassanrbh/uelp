import React from "react";
import { Link } from "react-router-dom";

const Writer = ({ question, writer }) => {
  return (
    <>
      <h1 className="text-base font-[600]">{question?.question}</h1>
      <p className="text-gray-600 mt-1">
        Asked by{" "}
        <Link
          to={`/user_details?username=${writer}`}
          className="font-bold text-[rgba(2,122,151,1)] hover:underline"
        >
          {writer}
        </Link>
        .
      </p>
    </>
  );
};

export default Writer;
