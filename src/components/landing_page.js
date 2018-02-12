import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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
      <FooterPage />
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);