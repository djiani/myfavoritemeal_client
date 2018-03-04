import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LandingPage from './landing_page';
import Dashboard from './dashboard';  //home page
import RegistrationPage from './registration_page';
import LoginPage from './loginPage';
import AddMealPage from './addMealPage';
import ViewsRecipes from './viewsRecipes';

import {MainMenu} from './mainMenu';
import {refreshAuthToken} from '../actions/auth';

import './App.css';

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <MainMenu props={this.props} currentUser={this.props.currentUser}/>
          </header>
          <div className="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/home/:mealId/:mealIndex" component={ViewsRecipes} />
            <Route exact path='/register' component={RegistrationPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/addmeal' component={AddMealPage} />
            <Route exact path='/profile' component={RegistrationPage} />
          </div>
          
        </div>
     
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
