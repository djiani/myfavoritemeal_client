import React from 'react';
//import AddMeal from './addMeal';
import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom'
import UpdateMealForm from './updateMealForm';
import {updateMeal, saveCurrentMealSuccess, saveCurrentMealFailure} from '../actions/meal';
import {API_BASE_URL} from '../config';


import './addMealPage.css';


export class UpdateMealPage extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      meal: {}
    })
  }

  componentDidMount(){
    if(!this.props.meal_id){
      alert("ouppps!!!!, something went wrong! /n Go back to home page");
      this.props.history.push('/home');
    }else{ 
      fetch(`${API_BASE_URL}/meals/meal/${this.props.meal_id}`)
      .then(res =>{
        if(!res.ok){
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(meal => {
        console.log('current meal to be update!')
        console.log(meal);
        this.setState({
          meal: meal
        })
        //update current meal state
        this.props.dispatch(saveCurrentMealSuccess(meal)); 
      })
      .catch(err =>{ 
        alert("This meal doesn't exit in the database or something wrong");
        //redirect to man page
        this.props.dispatch(saveCurrentMealFailure(err))
        this.props.history.push('/home');

      });
    }
  }

  showResults(values){
    if(this.props.currentUser ){
      values.owner.username = this.props.currentUser.username;
    }else{
      values.owner.username = '';
    }
    //update meal item
    this.props.dispatch(updateMeal(values, this.props.meal_id))
    if(this.props.success){
      alert("Item successfully update /n click Ok to return to home Page!");
      this.props.history.push("/home");
    }
    if(this.props.error){
      alert("oupps !!!, unable to update this item!!!!");
    }
   
  }


  render(){
    
    return (
        <div className='page_styling'>

          <UpdateMealForm onSubmit={values => this.showResults(values)} meal={this.state.meal} history={this.props.history} />
        </div>
    )
  }  

}

const mapStateToProps = state =>({ 
   meal_id: state.meal.mealId,
   currentUser : state.auth.currentUser,
   error: state.meal.error,
   success: state.meal.success
})


export default connect(mapStateToProps)(UpdateMealPage);