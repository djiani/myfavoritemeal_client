import React from 'react';
import {connect} from 'react-redux';
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu';

import {addMealForm} from '../actions/meal';
import 'rc-menu/assets/index.css';
//import animate from 'css-animation';
import './menuBar.css';


export class MenuBar extends React.Component{

  handleSelect(info){
  if(info.key === "1"){
    console.log('login has been clicked');
  }
  else if (info.key === "2"){
   
   console.log('register has been clicked');
  }

  else if(info.key === "3-1"){
    console.log("addMeal has been clicked");

   this.props.dispatch(addMealForm());
  }
  else if(info.key === "3-2"){
   console.log('register has been clicked');
  }

}


onOpenChange(value) {
  console.log('onOpenChange', value);
}


  render(){
    console.log(this.props)
    const commonMenu = (
      <Menu onSelect={info =>this.handleSelect(info)} onOpenChange={value =>this.onOpenChange(value)}>    
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

    return (
      <div className="horizontal_menu">{horizontalMenu2}</div>
    );
  }
}
  


export default connect()(MenuBar);