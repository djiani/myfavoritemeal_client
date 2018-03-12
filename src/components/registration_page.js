import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RegistrationForm from './registration_form';
import './registration_page.css';

export function RegistrationPage(props){
  if(props.loggedIn){
    props.history.push('/home');
  }

  return (
    <div className="page_styling"> 
    <h2 className="text_effect"> Fill the information below </h2>
      <RegistrationForm />
      <div>
        Have an account already? <Link to="/login"><span className= "link_red">Login</span></Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);