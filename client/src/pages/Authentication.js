import React from 'react'

import Register from "../components/auth/RegisterForm"
import Login from "../components/auth/LoginForm"


function Authentication() {
  return (
    <div className='auth container'>
      <h1>Welcome Back</h1>
      <Login></Login>
      <div className='line'></div>
      <h1>New?</h1>
      <Register></Register>
    </div>
  )
}


export default Authentication