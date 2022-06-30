import React, {useState} from 'react'
import * as Yup from "yup";
import { Formik , Form, ErrorMessage, Field} from "formik";
import { Link , useNavigate} from "react-router-dom"
import AuthService from "../../services/user.service"

const LoginForm = () => {
  const [errorServer, setErrorServer] = useState("");
  const navigate = useNavigate();

  return (
    <Formik initialValues={{email: "", password: ""}}
      validationSchema={Yup.object({
        email: Yup.string()
          .trim("must be non spaces")
          .email("Invalid Email")
          .required("Required"),
        password: Yup.string()
          .min(7, "Too Short . must be at least 7")
          .max(30, "Too Long")
          .required("Required")
          .matches(/[a-zA-Z]/,"must contain only lattin char"),
      })}
      onSubmit={async (values, {setSubmitting}) => {
        const resp = await AuthService.login(values.email,values.password)
        if (resp.current_user) {
          navigate("/")
          window.location.reload()
          setSubmitting(false)
        } else {
          setErrorServer(resp)
        }
      }}
      >
        {({isSubmitting}) => (
          <Form className="flex flex-col">
            <Field type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-1 m-2
                    border border-gray-400 px-2 py-1 rounded"/>
            <ErrorMessage name="email"
              component="div"
              className="text-xs font-bold text-red-400"/>

            <Field type="password"
              name="password" 
              placeholder = "Password"
              className="border mb-1 border-gray-400 m-2 px-2 py-1
              rounded"/>
            <ErrorMessage name="password" component="div"
              className="text-xs font-bold text-red-400"/>

            <p className="text-blue-400 font-bold text-xs text-right">
              <Link to="/forget-password">
                Forgot password?
              </Link>
            </p>

            {!isSubmitting ? <Field type="submit"
              value="Log In"
              disabled={isSubmitting}
              className="text-white 
              bg-red-400
              border-red-400 border mt-2
              flex p-2 rounded mb-3 justify-center cursor-pointer hover:bg-red-500 hover:border-red-500"/>
            : (
              <button type="button" className="bg-indigo-500 mt-2 flex p-2 rounded mb-3 justify-center" disabled>
                <svg className="animate-spin" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.293-3.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H12c-.34 0-.872.11-1.29.412-.368.264-.71.714-.71 1.588 0 .874.342 1.324.71 1.588.418.302.95.412 1.29.412.368 0 .945-.128 1.37-.473a1 1 0 0 1 1.26 1.554c-.87.705-1.93.919-2.63.919a4.35 4.35 0 0 1-2.46-.788C8.659 15.576 8 14.526 8 13c0-1.526.658-2.576 1.54-3.212A4.35 4.35 0 0 1 12 9h.586l-.293-.293z" clipRule="evenodd"/></svg>
                <span className="font-bold pl-1">Processing...</span>
              </button> 
            )}            
          </Form>
        )}
    </Formik>
  )
}

export default LoginForm