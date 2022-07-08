import React from 'react'
import {ErrorMessage} from "formik";

const HandleErrorMessage = ({name}) => {
  return <ErrorMessage component="div" name={name} className="text-xs font-bold text-red-400"/>
}

export default HandleErrorMessage