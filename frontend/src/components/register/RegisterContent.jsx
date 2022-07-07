import React from 'react'
import * as Yup from "yup";
import { Field, ErrorMessage,Form, Formik } from "formik";
import differenceInYears from "date-fns/differenceInYears";

const RegisterContent = () => {
  return (
    <Formik initialValues={{
      email: "",
      password: "",
      password_confirmation: "",
      f_name: "",
      l_name: "",
      zip_code: "",
      birth_date: "",
      gender: "",
      phone_number: "",
    }} validationSchema={Yup.object({
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
      gender: Yup.string()
        .required("This field is requried"),
      phone_number: Yup.string()
        .min(10,"Must be more than 10 characters")
        .required("This field is requried")
    })}>

    </Formik>
  )
}

export default RegisterContent