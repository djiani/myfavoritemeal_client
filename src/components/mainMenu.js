
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './meal.css';


export class MainMenu extends React.Component{

//logout and redirect to home page;
  handleOnSelectRight(eventKey){
    console.log(eventKey)
    if(eventKey === 3.2){
      this.props.props.dispatch(clearAuth());
      clearAuthToken();
      this.props.props.history.push('/');
    }
  }

 
  
  
  render(){ 
    let navMenu = '';
    console.log(this.props);
    if(this.props.props.loggedIn){ 
      navMenu = ( 
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>MyFavoriteMeal </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav  onSelect= {eventKey =>this.handleOnSelectLeft(eventKey)} >
              <NavItem eventKey={1} href="addmeal" >
               AddMeal
              </NavItem>
              <NavItem eventKey={2} href={`/home/${this.props.currentUser.username}`} >
                MyMeals
              </NavItem>
            </Nav>
            <Nav pullRight  onSelect={eventKey =>this.handleOnSelectRight(eventKey)}>
              <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <MenuItem eventKey={3.4} disabled> welcome <h4>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h4></MenuItem>
                <MenuItem divider />
                <MenuItem divider />
                <MenuItem eventKey={3.1}>profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} >Log out</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      );

    }
    else{ 
     navMenu = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/home'>MyFavoriteMeal </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight >
            <NavItem eventKey={1} href="/login" >
              Sign In
            </NavItem>
            <NavItem eventKey={2} href="/register">
              Register
            </NavItem>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}

     return navMenu;
  }
}

const mapStateToProps = state => ({ 
 // userloggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainMenu);


