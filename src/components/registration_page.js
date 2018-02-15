import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import RegistrationForm from './registration_form';

export function RegistrationPage(props){
  if(props.loggedIn){
    return <Redirect to="/home" />
  }

  return (
    <div className="registration_page"> 
    <h2> Fill the information below </h2>
      <RegistrationForm />
      <Link to="/login">Login</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);