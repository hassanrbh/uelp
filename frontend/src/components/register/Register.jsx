import React from 'react'
import RegisterForm from './RegisterForm'

const Register = ({setIsToggle, toggle}) => {
  return (
    <RegisterForm setIsToggle={setIsToggle} toggle={toggle}/>
  )
}

export default Register