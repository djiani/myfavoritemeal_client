import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection'
import ViewsRecipes from './viewsRecipes';
import {API_BASE_URL} from '../config';
//import AddMeal from './addMeal';
export class DashBoard extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      error: null,
      loading: false
    }
  }

  componentDidMount() {
      this.loadMealData();
  }
  
  loadMealData(){
    this.setState({
      error: null, 
      loading: true
    });

    return fetch(`${API_BASE_URL}/meals`)
    .then(res =>{
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      res.json();
    })
    .then(meals => this.setState({
      loading: false,
      meals: meals
    }))
    .catch(err =>
      this.setState({
        error: 'Could not load meal data',
        loading: false
      }));
  }

  render(){ 
    let body;
    if(this.state.error){
      body = (
        <div className="message message-error">{this.state.error}</div>
      );
    }else if(this.state.loading){
      body = (
        <div className="message message-default">Loading data...</div>
      );
    }else if(this.props.viewsrecipes==='viewsrecipes') {
      body = (
        <ViewsRecipes meal={this.props.meals[this.props.indexMeal]}  />
      )
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
        meals: state.meal.meals
    };
};

export default connect(mapStateToProps)(DashBoard);