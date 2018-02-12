import React from 'react';
import './meal.css';


export default class Meal extends React.Component{
  viewRecipes(index){
    
  }
  render(){ 
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
          <button className="recipes_btn" onClick={(index)=>this.viewRecipes(index)} > view recipes</button>
        </div>
      </div>
    );
  }
}


