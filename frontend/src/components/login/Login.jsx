import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div>
      <Formik initialValues={{email: "", password: ""}}
          validationSchema={Yup.object({
            email: Yup.string()
              .max(35, "must be 35 characters long")
              .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email")
              .trim("Cannot use Whitespaceing")
              .required("Required"),
            password: Yup.string()
              .min(7, "must be at least 7")
              .max(20, "Cannot be to long")
              .required("Required")
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="bg-purple-400" placeholder="make correct email"/>
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic"/>

            <label htmlFor="password">Password</label>
            <Field name="password" type="password"/>
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic"/>

            <input type="submit" value="Submit News"/>
          </Form>
      </Formik>
    </div>
  )
}

export default Login