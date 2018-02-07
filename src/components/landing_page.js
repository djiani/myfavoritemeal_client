import React, { Component } from 'react';

import {Header_Section, Welcome_page, Description_page, 
  HowToUse_page, SignInUp_page, Footer_page} from './landing_page2';

  export default function LandingPage(props){
    return (<div>
          <Welcome_page />
          <Description_page />
          <HowToUse_page />
          <SignInUp_page />
          </div>
      )
  }
