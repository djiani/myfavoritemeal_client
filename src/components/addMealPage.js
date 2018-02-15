import React from 'react';
import AddMeal from './addMeal';
import './addMealPage.css';


export default class AddMealPage extends React.Component{
  
  render(){
    return (
        <div className='meal_form_block'>
          <AddMeal />
        </div>
    )
  }  


} 