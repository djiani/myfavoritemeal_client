import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection'
import ViewsRecipes from './viewsRecipes';
//import AddMeal from './addMeal';
export function DashBoard(props){ 
  //alert(props.whatToLoad);
  
  if(props.viewsrecipes==='viewsrecipes'){
    return <ViewsRecipes meal={props.meals[props.indexMeal]}  />
  }
  
  return (  
    <div>
      <SearchSection />
      <MealList />
    </div> 
    );
  
}

const mapStateToProps = state => { 
    return {
        indexMeal: state.meal.indexMeal, 
        viewsrecipes: state.meal.viewsrecipes,
        meals: state.meal.meals
    };
};

export default connect(mapStateToProps)(DashBoard);