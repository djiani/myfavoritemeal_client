import React from 'react';
import {connect} from 'react-redux';


import Meal from './meal';
import './mealList.css'

export function MealList(props){

  const listMeal = props.meals.map((meal, index) => (
    <Meal meal= {meal} key={index} />)
  );

  return (
    <div className = "mealList">
      {listMeal};
    </div>
  );

}

const mapStateToProps = state => ({
    meals: state.meal.meals
});

export default connect(mapStateToProps)(MealList);