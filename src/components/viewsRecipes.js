import React from 'react';
import {Redirect} from 'react-router-dom';
import './viewsRecipes.css';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../config';
import {saveCurrentMealId} from '../actions/meal';


export class ViewsRecipes extends React.Component{
  handleEditMeal(event){
    event.preventDefault();
    this.props.dispatch(saveCurrentMealId(this.props.match.params.mealId));
    this.props.history.push(`/update/${this.props.match.params.mealId}`)
  }

  handleDeleteMeal(event){
    event.preventDefault();
    //console.log(this.props.match.mealId)
    return fetch(`${API_BASE_URL}/meals/${this.props.match.params.mealId}`, {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json'
    }
    
    })
    .then(res =>{
      alert(`Meal id= ${this.props.match.params.mealId} has been successfully delete`);
      return this.props.history.push(`/home/${this.props.currentUser.username}` );
    })
    .catch(err => {
        alert(`Ouuppps!!!!, This item cannot been delete!!!!`);
        console.log(err);
    }
  );
  }
  
  render(){
    let DisplayButton;

    if(!this.props.meals || !this.props.currentUser){
     return  <Redirect to='/home'/>
    }

    let indexMeal = this.props.match.params.mealIndex;
    if(this.props.meals[indexMeal].username === this.props.currentUser.username){
      DisplayButton = (
        <div>
          <button className="edit meal_btn" onClick={event =>this.handleEditMeal(event)}> Edit</button>
          <button className="delete meal_btn" onClick={event =>this.handleDeleteMeal(event)}> delete</button>
        </div>)
    }
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
          <h3> Description </h3>
            <p>{this.props.meals[indexMeal].description} </p>
            <ul>
              <li> Category : <span className="infoElt">{this.props.meals[indexMeal].category}</span></li>
              <li> Difficulty :<span className="infoElt"> {this.props.meals[indexMeal].difficulty}</span></li>
              <li> Hands_on : <span className="infoElt">{this.props.meals[indexMeal].hands_on} munites</span></li>
              <li> Served :<span className="infoElt"> {this.props.meals[indexMeal].served}</span> </li>
              <li> Posted by : <span className="infoElt">{this.props.meals[indexMeal].owner}</span> </li>
            </ul>
            <div>
              {DisplayButton}
            </div>

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
    meals: state.meal.meals,
    currentUser: state.auth.currentUser

  }
}


export default connect(mapStateToProps)(ViewsRecipes);