import React from "react";
import { Link, useParams } from "react-router-dom";

const Answers = ({question}) => {
  const { business } = useParams();

  return (
    <p className="mt-3">
      No answers yet.{" "}
      <Link
        to={`/questions/${business}/${question}`}
        state={{question_id: question.id}}
        className="hover:underline font-bold text-[rgba(2,122,151,1)]"
      >
        Answer this question
      </Link>
    </p>
  );
};

export default Answers;
