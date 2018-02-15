import React from 'react';
import './viewsRecipes.css';

export default function ViewsRecipes(props){
  console.log(props);
  const listIngredients = props.meal.ingredients.map((ingredient, index) =>(
    <li key={index}> {ingredient}</li>
  ))

const listDirections = props.meal.directions.map((direction, index) =>(
    <li key={index}><span className="infoElt">STEP {index+1}:</span> {direction}</li>
  ))
  return(
    <div >
    <h1> {props.meal.name}</h1>
      <div className="recipes_section">
        <div className="recipes_block">
           <img src={props.meal.image_url} alt="test" className="recipes_img"/> 
        </div>
        <div  className="recipes_block">
          <ul>
          <li>{props.meal.description} </li>
          <li> <span className="infoElt">Category </span>: {props.meal.type}</li>
          <li> <span className="infoElt">Difficulty </span>: {props.meal.difficulty}</li>
          <li> <span className="infoElt">Hands_on </span>: {props.meal.hands_on} munites</li>
          <li> <span className="infoElt">Served </span>: {props.meal.served} </li>
          <li> <span className="infoElt">Posted by </span>: {props.meal.owner} </li>
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

