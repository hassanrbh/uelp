import React from "react";
import { useMutation } from "react-query";
import { Formik, Field, Form, useField } from "formik";
import questionService from "../../services/questions.service.js";
import Loading from "../reusableComponents/Loading";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyTextArea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={`${className} text-area h-[112px] w-[600px] shadow hover:border-[rgba(2,122,151,1)] outline-none border border-gray-300 rounded p-3 font-light text-sm trasntion-all ease-in-out duration-500`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const WriteQuestion = () => {
  const { business } = useParams();
  const { mutate, isLoading } = useMutation(
    (question) => questionService.createQuestion(business, question),
    {
      onSuccess: (response) => {
        toast.success(response.success);
        document.documentElement.scrollTop = 0;
      },
      onError: (error) => {
        if (error.response.data.error) {
          toast.error(error.response.data.error[0]);
        }
        toast.error(error.response.data.client[0]);
      },
    }
  );

  return (
    <>
      <h1 className="font-bold text-lg mb-3">
        Don't see your question? Ask away!
      </h1>
      <Formik
        initialValues={{
          question: "",
          notify_me: false,
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutate({
            question: values,
          });
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
              placeholder={`What would you like to know about ${business}`}
            />
            <label className="flex cursor-pointer mt-3">
              <Field
                type="checkbox"
                name="notify_me"
                className="block w-5 h-5 rounded-lg transition-all ease-in-out duration-700 shadow text-black"
              />
              <span className="font-[400] text-[14px] text-[rgba(45,46,47,1)] ml-2">
                Notify me of new answers
              </span>
            </label>

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

export default WriteQuestion;
