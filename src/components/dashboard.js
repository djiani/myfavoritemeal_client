import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection';
import {API_BASE_URL} from '../config';
import {loadMealDataSuccess, loadMealDataFailure} from '../actions/meal';

//import AddMeal from './addMeal';
export class DashBoard extends React.Component{ 
  
  componentDidMount() {
    console.log('loading data from db');
      this.loadMealData();

  }
  
  loadMealData(){
    console.log('loadMealData call!');
    return fetch(`${API_BASE_URL}/meals`)
    .then(res =>{
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(meals => {
      console.log(meals)
      this.props.dispatch(loadMealDataSuccess(meals)); 
    })
    .catch(err =>{ 
      console.log(err)
      this.props.dispatch(loadMealDataFailure(err))

    });
  }

  render(){ 
    let body;
    if(this.props.error){
      body = (
        <div className="message message-error">{this.props.error}</div>
      );
    }else if(this.props.loading){
      body = (
        <div className="message message-default">Loading data...</div>
      );
    }else{
      body= (
        <div>
          <SearchSection />
          <MealList />
      </div> 
      )
    }
    return (
    <div> 
      {body} 
    </div>  
    );
    
  }
}


const mapStateToProps = state => { 
    return {
        indexMeal: state.meal.indexMeal, 
        viewsrecipes: state.meal.viewsrecipes,
        loading: state.meal.loading,
        error: state.meal.error,
        meals: state.meal.meals
    };
};

export default connect(mapStateToProps)(DashBoard);