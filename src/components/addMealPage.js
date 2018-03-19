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
    
   
  }

  render(){
    //let error;
    if(this.props.error){
       return(
        <div> 
          <h1> oupppss!!!, something wrong occured </h1>
          {this.props.error} 
          <h2> <a href='/home'> Go back to home page</a> </h2>
        </div>)
        
    }

    if(this.props.success){
     return (
      <div>
        <h1> New meal successfully added!!! </h1>
        <h2> <a href='/home'> Go back to home page</a> </h2>
      </div>)
    }

    return (
        <div className='page_styling'>
          <AddMealForm onSubmit={values => this.showResults(values)} />
          }
    
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