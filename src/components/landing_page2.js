import React from 'react';
import './landing_page.css';
import {MenuBar} from './menuBar';
import LoginForm from './login_form';


export function Header_Section(props){
  return (
    <div className="Header_Section">
        <MenuBar />
    </div> );

}

export function Welcome_page(props){
  return(
    <div className="welcome_page section"> 
    <h1> welcome to Your Favorite Meals Sharing apps</h1>
    </div>)
}

export function Description_page(props){
  return(
    <div className="description_page section"> 
    <h1> Experience My Favorite Meal</h1>
    <p> MyFavirite Meals helps you sharing your taste for food with the reste of the world and helps 
    inpirate others about the best plat out there who might be out of mind to what to eat or 
    who might have hard time to choose or order food or what to make for breakfast, lunch, dinner</p>
    </div>)
}

export function HowToUse_page(props){
  return(
    <div className="howToUs_page section"> 
    <h1>How to Use This App</h1>
    <p> Describe here how to use this apps. add a screen shoot and the bief details about the app. </p>
    </div>)
}

export function SignInUp_page(props){
  return(
    <div className="signInUp_page section"> 
    <h1>Sign in </h1>
      <LoginForm />
    </div>)
}

export function Footer_page(props){
  return(
    <div className="footer_page"> 
    <h1> footer</h1>
    </div>)
}
