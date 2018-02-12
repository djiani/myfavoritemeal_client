import React from 'react';
import MealList from './mealList';
import SearchSection from './searchSection'
import ViewRecipes from './viewRecipes';
export default class DashBoard extends React.Component{
  
  render() {
    return (
      <div> 
        <SearchSection />
        <MealList />
        <ViewRecipes />
      </div>
    )
  }
  
}