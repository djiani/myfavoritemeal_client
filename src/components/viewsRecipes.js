import React from 'react';
import './viewsRecipes.css';
import {connect} from 'react-redux';

export class ViewsRecipes extends React.Component{

  render(){ 
    console.log(this.props);
    let indexMeal = this.props.match.params.mealIndex;
    const listIngredients = this.props.meals[indexMeal].ingredients.map((ingredient, index) =>(
      <li key={index}> {ingredient}</li>
    ))

  const listDirections = this.props.meals[indexMeal].directions.map((direction, index) =>(
      <li key={index}><span className="infoElt">STEP {index+1}:</span> {direction}</li>
    ))
    return(
      <div >
      <h1> {this.props.meals[indexMeal].name}</h1>
        <div className="recipes_section">
          <div className="recipes_block">
             <img src={this.props.meals[indexMeal].image_url} alt="test" className="recipes_img"/> 
          </div>
          <div  className="recipes_block">
            <ul>
            <li>{this.props.meals[indexMeal].description} </li>
            <li> <span className="infoElt">Category </span>: {this.props.meals[indexMeal].category}</li>
            <li> <span className="infoElt">Difficulty </span>: {this.props.meals[indexMeal].difficulty}</li>
            <li> <span className="infoElt">Hands_on </span>: {this.props.meals[indexMeal].hands_on} munites</li>
            <li> <span className="infoElt">Served </span>: {this.props.meals[indexMeal].served} </li>
            <li> <span className="infoElt">Posted by </span>: {this.props.meals[indexMeal].owner} </li>
            </ul>
          </div>
        </div> 
        <div className="recipes_section">
          <div className="recipes_block ingredients">
           <h3> Ingredients</h3>
           <ul>
           {listIngredients}
           </ul>
          </div>
          <div  className="recipes_block direction">
            <h3> Direction</h3>
            <ul>
           {listDirections}
           </ul>
          </div>
        </div> 
      
      </div>
      
    )
  }
}

const mapStateToProps= state =>{
  return {
    meals: state.meal.meals
  }
}


export default connect(mapStateToProps)(ViewsRecipes);