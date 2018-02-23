import React from 'react';
import {connect} from 'react-redux';


import Meal from './meal';
import './mealList.css'

function checkControl(props, meal, index){
  if(props.easyChecked && meal.difficulty === 'easy'){
    return (<Meal meal= {meal} indexMeal={index} key={index}  />);
  }
  else if(props.intermedChecked && meal.difficulty === 'intermediate'){
    return (<Meal meal= {meal} indexMeal={index} key={index}  />);
  }
  else if(props.difficultChecked && meal.difficulty === 'difficult'){
    return (<Meal meal= {meal} indexMeal={index} key={index}  />);
  }

  else if(!props.easyChecked && !props.intermedChecked && !props.difficultChecked){
    return (<Meal meal= {meal} indexMeal={index} key={index}  />);
  }
  else{
    return [];
  }

}
export function MealList(props){

  const listMeal = props.meals.map((meal, index) => { 
    if(props.breakfastChecked && meal.category === 'breakfast'){
      return checkControl(props, meal, index)
      //return (<Meal meal= {meal} indexMeal={index} key={index}  />);
    }
    else if(props.lunchChecked && meal.category === 'lunch'){
      return checkControl(props, meal, index)
      //return (<Meal meal= {meal} indexMeal={index} key={index}  />);
    }
    else if(props.dinnerChecked && meal.category === 'dinner'){
      return checkControl(props, meal, index)
      //return (<Meal meal= {meal} indexMeal={index} key={index}  />);
    }
    else if(!props.breakfastChecked && !props.lunchChecked && !props.dinnerChecked){

      //return (<Meal meal= {meal} indexMeal={index} key={index}  />);
      return checkControl(props, meal, index)
    }
    return [];
  });

  return (
    <div className = "mealList">
      {listMeal};
    </div>
  );

}

const mapStateToProps = state => ({
    meals: state.meal.meals,
    breakfastChecked: state.meal.breakfastChecked,
    dinnerChecked: state.meal.dinnerChecked,
    lunchChecked: state.meal.lunchChecked,
    easyChecked: state.meal.easyChecked,
    intermedChecked: state.meal.intermedChecked,
    difficultChecked: state.meal.difficultChecked

});

export default connect(mapStateToProps)(MealList);