import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './meal.css';


export class Meal extends React.Component{


  render(){ 
    
    return (
      <div className="meal">
        <div>
          <img src={this.props.meal.image_url} alt={this.props.meal.name} className="image_meal"/>
        </div>
        
        <div>
          <h4 className="meal_name"> {this.props.meal.name} </h4>
          <ul className="well2">
            <li> Difficulty: <span className="text_bold">{this.props.meal.difficulty}</span></li>
            <li> Time: <span className="text_bold">{this.props.meal.hands_on} minutes </span></li>
            <li> posted by:<span className="text_bold"> {this.props.meal.owner}</span></li>

          </ul>
        </div>
        <div>
          {/*<a href={`#:${this.props.indexMeal}`} >
          
           <a  className="like_btn"> 
           <h2><span class="glyphicon glyphicon-heart-empty "></span></h2>
           <h2><span class="glyphicon glyphicon-heart"></span></h2>

           </a>
            //<button className="recipes_btn" onClick={()=>this.handleViewsRecipes(this.props.indexMeal, 'viewsrecipes')} > view recipes</button>
            */}
            <Link to={`/home/${this.props.meal.id}/${this.props.indexMeal}`} > viewsrecipes</Link>
        </div>
      </div>
    );
  }
}


export default connect()(Meal);


