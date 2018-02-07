import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Header_Section, Welcome_page, Description_page, 
  HowToUse_page, SignInUp_page, Footer_page} from './landing_page';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header_Section />
          <h1 className="App-title">My Favorite Meals</h1>
        </header>
        <div className="main">
          <Welcome_page />
          <Description_page />
          <HowToUse_page />
          <SignInUp_page />
          <Footer_page />
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
