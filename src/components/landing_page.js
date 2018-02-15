import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import WelcomeSection from './welcomeSection';
import DescriptionSection from './descriptionSection';
import FooterSection from './footerSection';

export function LandingPage(props) {
  if (props.loggedIn){
     return <Redirect to ="/home" />
  }

  return (
    <div>
      <WelcomeSection />
      <DescriptionSection />
      <FooterSection />
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);