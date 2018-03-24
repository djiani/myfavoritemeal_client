import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './meal.css';

export class Meal extends React.Component{


  render(){ 
    
    return (
      <div className="meal">
        <div className="image_meal_block">
          <img src={this.props.meal.image_url} alt={this.props.meal.name} className="image_meal"/>
        </div>
        
        <div>
          <div className="meal_name">
            <label> {this.props.meal.name} </label>
          </div>
          <ul className="well2">
            <li> Difficulty: <span className="text_bold">{this.props.meal.difficulty}</span></li>
            <li> Time: <span className="text_bold">{this.props.meal.hands_on} minutes </span></li>
            <li> posted by:<span className="text_bold"> {this.props.meal.owner}</span></li>

          </ul>
        </div>
        <div className="recipes_Link_block">
        
            <Link to={`/home/${this.props.meal.id}/${this.props.indexMeal}`} > 
              <span className="recipes_Link">view recipe</span>
            </Link>
        </div>
        
      </div>
    );
  }
}


export default connect()(Meal);


