import React from 'react';
import {LoginForm} from './login_form';


export function LoginPage(props){
  return (
    <div className="signInUp_page section"> 
    <h1>Sign in </h1>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  )
}