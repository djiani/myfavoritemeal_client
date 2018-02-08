import React, { Component } from 'react';

import {WelcomePage, DescriptionPage, 
  HowToUsePage, SignInUpPage, FooterPage} from './landing_page2';

  export default function LandingPage(props) {
    return (
      <div>
        <WelcomePage />
        <DescriptionPage />
        <HowToUsePage />
        <SignInUpPage />
      </div>
    )
  }
