import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landing_page';
import Dashboard from './dashboard';  //home page
import RegistrationPage from './registration_page';

import {HeaderSection} from './landing_page2';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <HeaderSection />
            <h1 className="App-title">My Favorite Meals</h1>
          </header>
          <div className="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path='/register' component={RegistrationPage} />
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
