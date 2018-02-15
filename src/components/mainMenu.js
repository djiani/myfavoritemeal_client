
import React from 'react';
import {connect} from 'react-redux';
import {whatToLoad} from '../actions/meal';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import './meal.css';


export class MainMenu extends React.Component{
  
  handleLeftMenu(title){
    this.props.dispatch(whatToLoad(title));
  }

  handleRightMenu(title){
    this.props.dispatch(whatToLoad(title));
  }
  
  render(){ 
    console.log(this.props);
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
          <NavItem eventKey={1} href="#" >
           <Link to='addmeal'>AddMeal</Link>
          </NavItem>
          <NavItem eventKey={2} href="#" >
            MyMeals
          </NavItem>
          <NavDropdown eventKey={3} title="MyPreferences" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>action</MenuItem>
            
          </NavDropdown>
        </Nav>
        <Nav pullRight >
          <NavItem eventKey={1} href="#" >
            <Link to='/login'> Sign In</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to='/register/'> Register</Link>
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
}


export default connect()(MainMenu);


