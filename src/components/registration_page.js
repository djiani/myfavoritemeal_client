import React from 'react';
import {Link} from 'react-router-dom';
import RegistrationForm from './registration_form';

export default function RegistrationPage(props){
  return (
    <div className="registration_page"> 
    <h2> Fill the information below </h2>
      <RegistrationForm />
      <Link to="/">Login</Link>
    </div>
  )
}