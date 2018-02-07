import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landing_page';
import Dashboard from './dashbord';  //home page
import RegistrationPage from './registration_page';

import {Header_Section} from './landing_page2';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header_Section />
            <h1 className="App-title">My Favorite Meals</h1>
          </header>
          <div className="main">
            <route exact path="/" component={LandingPage} />
            <route exact path="/home" component={Dashboard} />
            <route exact path='register' component={RegistrationPage} />
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
