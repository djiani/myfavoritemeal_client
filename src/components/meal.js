import React from 'react';
import {connect} from 'react-redux';
import {viewsRecipes} from '../actions/meal';
import './meal.css';


export class Meal extends React.Component{

  handleViewsRecipes(indexMeal, title){
    this.props.dispatch(viewsRecipes(indexMeal, title));
  }

  render(){ 
    console.log(this.props);
    return (
      <div className="meal">
        <div>
          <img src={this.props.meal.image_url} alt={this.props.meal.name} className="image_meal"/>
        </div>
        
        <div>
          <h4 className="meal_name"> {this.props.meal.name} </h4>
          <ul>
            <li> {this.props.meal.hands_on} minutes</li>
            <li> posted by: {this.props.meal.owner}</li>
          </ul>
        </div>
        <div>
          <button className="recipes_btn" onClick={()=>this.handleViewsRecipes(this.props.indexMeal, 'viewsrecipes')} > view recipes</button>
        </div>
      </div>
    );
  }
}


export default connect()(Meal);


