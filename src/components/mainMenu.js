
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import './meal.css';


export function MainMenu(props){
  
    if(props.loggedIn){
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/home'>MyFavoriteMeal </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="addmeal" >
               AddMeal
              </NavItem>
              <NavItem eventKey={2} href="#" >
                MyMeals
              </NavItem>
              <NavDropdown eventKey={3} title="MyPreferences" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>action</MenuItem>          
              </NavDropdown>
            </Nav>
            <Nav pullRight >
              <NavItem eventKey={1} href="/login" >
                Sign In
              </NavItem>
              <NavItem eventKey={2} href="/register">
                Register
              </NavItem>
              <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2}>Log out</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      );

    }

    return(


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

    )
    
  
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(MainMenu);


