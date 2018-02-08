import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {WelcomePage, DescriptionPage, 
  HowToUsePage, SignInUpPage, FooterPage} from './landing_page2';

export function LandingPage(props) {
  if (props.loggedIn){
    return <Redirect to ="/home" />
  }

  return (
    <div>
      <WelcomePage />
      <DescriptionPage />
      <HowToUsePage />
      <SignInUpPage />
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);