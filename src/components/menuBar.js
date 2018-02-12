import React from 'react';
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu';
import {Redirect} from 'react-router-dom';
import 'rc-menu/assets/index.css';
//import animate from 'css-animation';
import './menuBar.css';


function handleSelect(info) {
  console.log(info);
  console.log(`selected ${info.key}`);
  if(info.key === "1"){
    console.log('login has been clicked');
    
     <Redirect to="/" />
  }
  else if (info.key === "2"){
   
   console.log('register has been clicked');
     <Redirect to ="/register" />
  }

  else if(info.key === "3"){
    console.log('account has been clicked');
  }

}


function onOpenChange(value) {
  console.log('onOpenChange', value);
}

const commonMenu = (
  <Menu onSelect={handleSelect} onOpenChange={onOpenChange}>    
    <MenuItem key="1">login</MenuItem>
    <MenuItem key="2">register</MenuItem>
    <SubMenu className="myMeals" title={<span>MyMeals</span>} key="3">
      <MenuItem key="3-1">addMeal</MenuItem>
      <MenuItem key="3-2">ListMyMeal</MenuItem>
    </SubMenu>
    <MenuItem key="4"></MenuItem>
    <SubMenu className="js-account" title={<span>Account</span>} key="5">
      <MenuItem key="1-1">profile</MenuItem>
      <MenuItem key="1-2">log Out</MenuItem>
    </SubMenu>
  </Menu>
);

const horizontalMenu2 = React.cloneElement(commonMenu, {
    mode: 'horizontal',
    openAnimation: 'slide-up',
    triggerSubMenuAction: 'click',
  });

export function MenuBar(props) {
  return (
    <div className="horizontal_menu">{horizontalMenu2}</div>
  );
}
