import React from 'react';
//import AddMeal from './addMeal';
import {connect} from 'react-redux';
import AddMealForm from './addMealForm';
import {addmeal} from '../actions/meal';

import './addMealPage.css';


export class AddMealPage extends React.Component{

  showResults(values){
    console.log(values);
    if(this.props.currentUser ){
      values.owner.username = this.props.currentUser.username;
    }else{
      alert('oupppss!!! Sign in first!!!!')
      return this.props.history.push("/");
    }

    this.props.dispatch(addmeal(values))
    console.log('check props success meal added');
    console.log(this.props.success);
    if(this.props.success){
      alert('new meal item successfully added!! Go back to home page' );
      this.props.history.push("/home");
    }

    if(this.props.error){
      alert(this.props.error)

    }
    
    
  }


  render(){
    let error;
    if(this.props.error){
        error = (
          <div> {this.props.error} </div>
        )
    }
    return (
        <div className='page_styling'>

          <AddMealForm onSubmit={values => this.showResults(values)} />
    
        </div>
    )
  }  

}

const mapStateToProps = state =>{
  return {
    currentUser : state.auth.currentUser,
    error: state.meal.error,
    success: state.meal.success
  }
  
}


export default connect(mapStateToProps)(AddMealPage);