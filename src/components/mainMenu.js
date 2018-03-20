
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import {deleteUserAccount} from '../actions/users';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';
import {API_BASE_URL} from '../config';
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
    if(eventKey === 3.3){
      console.log('checking user_id...');
      console.log(this.props.props.currentUser.id);
      //this.props.props.dispatch(deleteUserAccount(this.props.props.currentUser.id))
     
      return fetch(`${API_BASE_URL}/users/${this.props.props.currentUser.id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }  
      })
      .then(res => {
        if(!res.ok){
          alert('unable to delete this account!!!');
        }else{ 
          this.props.props.dispatch(clearAuth());
          clearAuthToken();
          alert('We are sorry to see you gone!!!')
          this.props.props.history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
          //dispatch(deleUserAccount_failure(err))
      });
    }
  }

  navMenu(){
  if(this.props.props.loggedIn){
    return (
      <Navbar inverse collapseOnSelect className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>MyFavoriteMeal </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav  onSelect= {eventKey =>this.handleOnSelectLeft(eventKey)} >
              <NavItem eventKey={1} href="/addmeal" >
               AddMeal
              </NavItem>
              <NavItem eventKey={2} href={`/home/${this.props.currentUser.username}`} >
                MyMeals
              </NavItem>
            </Nav>
            <Nav pullRight  onSelect={eventKey =>this.handleOnSelectRight(eventKey)}>
              <NavDropdown eventKey={3} title={`Welcome  ${this.props.currentUser.firstName} ${this.props.currentUser.lastName} `} id="basic-nav-dropdown">
                <MenuItem divider />
                <MenuItem eventKey={3.2} ><h4>Log out</h4></MenuItem>
                <MenuItem divider />
                <MenuItem divider />
                <MenuItem eventKey={3.3} ><h4>delete my Account</h4></MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>)
  }
  else{
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>MyFavoriteMeal </Link>
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
} 
  
  render(){ 
    return (
      <div>
        {this.navMenu()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
 // userloggedIn: state.auth.currentUser !== null
 user_id: state.auth.currentUser.id
});

export default connect(mapStateToProps)(MainMenu);


