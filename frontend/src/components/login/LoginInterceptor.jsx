import React from 'react'
import Header from './header';
import LoginForm from './LoginForm';

const LoginInterceptor = ({seToggle, toggle}) => {
  return (
    <div>
      <Header seToggle={seToggle} toggle={toggle}/>
      <LoginForm />
    </div>
  )
}

export default LoginInterceptor