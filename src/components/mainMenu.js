
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../config';
import {clearAuth} from '../actions/auth';
import {loadMealDataSuccess, loadMealDataFailure} from '../actions/meal';
import './meal.css';


export class MainMenu extends React.Component{

//logout and redirect to home page;
  handleOnSelectRight(eventKey){
    console.log(eventKey)
    if(eventKey === 3.2){
     this.props.props.dispatch(clearAuth());
      return(<Redirect to ="/" />) 
     
    }
  }

   handleOnSelectLeft(eventKey){
    console.log(eventKey)
    console.log(this.props.currentUser.username)

    if(eventKey === 2){
      return fetch(`${API_BASE_URL}/meals/mymeal/${this.props.currentUser.username}`)
        .then(res =>{
          if(!res.ok){
            return Promise.reject(res.statusText);
          }
         // console.log(res.json())
          return res.json();
        })
        .then(meals => {
          console.log(meals)
          this.props.props.dispatch(loadMealDataSuccess(meals)); 
        })
        .catch(err =>{ 
          console.log(err)
          this.props.props.dispatch(loadMealDataFailure(err))

        });
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
              <NavItem eventKey={2} href={`#${this.props.currentUser.username}`} >
                MyMeals
              </NavItem>
              <NavDropdown eventKey={3} title="MyPreferences" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>action</MenuItem>          
              </NavDropdown>
            </Nav>
            <Nav pullRight  onSelect={eventKey =>this.handleOnSelectRight(eventKey)}>
              <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
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


