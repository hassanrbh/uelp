import React, { useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import differenceInYears from "date-fns/differenceInYears";
import HandleErrorMessage from "./HandleErrorMessage";

const RegisterContent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        password_confirmation: "",
        f_name: "",
        l_name: "",
        zip_code: "",
        birth_date: "",
        gender: "",
        phone_number: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .trim("must be non spaces")
          .email("Invalid Email")
          .required("This field is requried"),
        password: Yup.string()
          .min(7, "Too Short must be at least 7 characters")
          .max(30, "Too Long must be at most 30 characters")
          .required("This field is requried")
          .matches(/[a-zA-Z]/, "must contain only lattin char"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Password Not Matche")
          .required("This field is requried"),
        f_name: Yup.string()
          .min(4, "Not real Name")
          .max(10, "Not Real Name")
          .required("This field is requried"),
        l_name: Yup.string()
          .min(4, "Not Real Name")
          .max(10, "Not Real Name")
          .required("This field is requried"),
        zip_code: Yup.number()
          .min(6, "must contain 6 numbers")
          .required("This field is requried"),
        birth_date: Yup.date()
          .nullable()
          .test("birth_date", "Should be greater than 18", (values) => {
            return differenceInYears(new Date(), new Date(values)) >= 18;
          }),
        gender: Yup.string().required("This field is requried"),
        phone_number: Yup.string()
          .min(10, "Must be more than 10 characters")
          .required("This field is requried"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form className="flex flex-col" autoComplete="off">
            <HandleErrorMessage name="f_name" />
            <Field
              type="text"
              name="f_name"
              id="f_name"
              placeholder="first Name"
            />
            <HandleErrorMessage name="l_name" />
            <Field
              type="text"
              name="l_name"
              id="l_name"
              placeholder="last Name"
            />
            <HandleErrorMessage name="email" />
            <Field type="email" name="email" id="email" placeholder="Email" />
            <HandleErrorMessage name="password" />
            <Field
              type="password"
              name="password"
              id="email"
              placeholder="Password"
            />
            <HandleErrorMessage name="password_confirmation" />
            <Field
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Password conf.."
            />
            <HandleErrorMessage name="zip_code" />
            <Field
              type="text"
              name="zip_code"
              id="zip_code"
              placeholder="Zip Code"
            />
            <HandleErrorMessage name="birth_date" />
            <Field type="date" name="birth_date" id="birth_date" />
            <HandleErrorMessage name="gender" />
            <div className="flex">
              <div>
                <Field type="radio" name="gender" value="man" />
                Man
              </div>
              <div>
                <Field type="radio" name="gender" value="memale" />
                Female
              </div>
            </div>
            <HandleErrorMessage name="phone_number" />
            <Field
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="PhoneNumber"
            />
            {!isSubmitting ? (
              <Field
                type="submit"
                value="Log In"
                disabled={isSubmitting}
                className="text-white 
              bg-red-400
              border-red-400 border mt-2
              flex p-2 rounded mb-3 justify-center cursor-pointer hover:bg-red-500 hover:border-red-500"
              />
            ) : (
              <button
                type="button"
                className="bg-indigo-500 mt-2 flex p-2 rounded mb-3 justify-center"
                disabled
              >
                <svg
                  className="animate-spin"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.293-3.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H12c-.34 0-.872.11-1.29.412-.368.264-.71.714-.71 1.588 0 .874.342 1.324.71 1.588.418.302.95.412 1.29.412.368 0 .945-.128 1.37-.473a1 1 0 0 1 1.26 1.554c-.87.705-1.93.919-2.63.919a4.35 4.35 0 0 1-2.46-.788C8.659 15.576 8 14.526 8 13c0-1.526.658-2.576 1.54-3.212A4.35 4.35 0 0 1 12 9h.586l-.293-.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold pl-1">Processing...</span>
              </button>
            )}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegisterContent;
