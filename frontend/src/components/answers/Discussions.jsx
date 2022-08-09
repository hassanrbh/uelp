import React, {useRef, useState} from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { FlagIcon } from "@heroicons/react/outline";
import {MyTextArea} from "../questions/WriteQuestion"
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SortBy from "./SortBy";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useQuery } from "react-query";
import questionService from "../../services/questions.service.js"
import Dividor from "../reusableComponents/Dividor";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Discussions = () => {
  const ref= useRef();

  useOnClickOutside(ref, () => setIsOpen((prev) => false));

  const [Items] = useState(["Popular", "Newest First"]);
  const [activeMenuItem, SetActiveMenuItem] = useState("Popular");
  const [isOpen, setIsOpen] = useState(false);

  const { question, business: business_slug } = useParams();
  const {
    state: { question_id },
  } = useLocation();

  const { data, isLoading } = useQuery([`${question}_question`], () =>
    questionService.getQuestionData({
      question_id,
      business_slug,
    })
  );

  return (
    <>
      <div className="font-bold text-[28px] flex justify-between">
        <div>{question}</div>
        <Tippy
          animation="scale"
          content={<span className="font-bold">Report question</span>}
          interactive={true}
        >
          <Link
            to={"/flag_content"}
            className=" border relative top-[3px] border-[#c8c9ca] p-[7px] rounded text-black hover:bg-gray-200 ease-in-out duration-700 h-[36px]"
          >
            <FlagIcon className="h-[16px] w-[16px] relative top-[2px]  text-gray-500" />
          </Link>
        </Tippy>
      </div>
      {!isLoading ? (
        <>
          <div className="font-[400] text-[14px] flex mt-1 text-[rgba(110,112,114,1)]">
            <p>
              Asked by{" "}
              <span className="font-bold text-[rgba(2,122,151,1)]">
                {data?.questioner?.username}
              </span>
            </p>
            <p className="separator">{data?.created_at}</p>
          </div>
        </>
      ) : null}
      <label className="flex mt-[13px]">
        <input
          type="checkbox"
          name="notify"
          className="mr-[10px] w-[22px]"
        />
        <p className="text-md font-normal">Notify me of a new answers</p>
      </label>
      {!isLoading ? (
        <div className="flex justify-between mt-5">
          <div className="text-[26px] font-bold">
            {data?.answers?.length === 0 ? null : data?.answers?.length} Answers
          </div>
          
          {data?.answers?.length >= 1 ? <SortBy 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            Items={Items}
            activeMenuItem={activeMenuItem}
            SetActiveMenuItem={SetActiveMenuItem} 
            ref={ref}/> 
            : null}
        </div>
      ) : null}
      <Dividor />
      {!isLoading ? (
        <>
          {data?.answers?.length > 1 ? (
            <div className="font-bold text-base ">Help out with an answer!</div>
          ) : (
            <>
              <div className="font-bold text-base">
                There aren’t any answers for this question yet. Yours could be
                the first!
              </div>
            </>
          )}
        </>
      ) : null}
      <Formik
        initialValues={{
          question: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values)
          resetForm({ values: "" });
          setSubmitting(true);
        }}
        validationSchema={Yup.object({
          question: Yup.string()
            .trim()
            .required(
              <p className="text-xs ml-5 text-[#e00706]">
                Oops! Your post needs to be in the form of a question before we
                can publish it
              </p>
            ),
          notify_me: Yup.boolean().required("required"),
        })}
      >
        {(formik) => (
          <Form className="">
            <MyTextArea
              name="question"
              rows="6"
              className={
                formik.errors.question
                  ? "border-[#e00706] border-2 hover:border-[#e00706]"
                  : null
              }
            />
            {isLoading ? (
              <button
                type="submit"
                className="ml-2 mt-5 bg-[#e00706] px-[16px] w-[120px] py-[7px] flex justify-center rounded text-white trasntion-all ease-in-out duration-500 font-[600]"
              >
                <div className="lds-hourglass"></div>
              </button>
            ) : (
              <button
                type="submit"
                className="ml-2 mt-5 bg-[#e00706] px-[16px] py-[7px] rounded text-white trasntion-all ease-in-out duration-500 font-[600]"
              >
                Post Question
              </button>
            )}
          </Form>
        )}
      </Formik>

    </>
  );
};

export default Discussions;
