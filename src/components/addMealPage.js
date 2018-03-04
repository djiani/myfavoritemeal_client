import React from 'react';
//import AddMeal from './addMeal';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import AddMealForm from './addMealForm';
import {addmeal} from '../actions/meal';

import './addMealPage.css';


export class AddMealPage extends React.Component{

  showResults(values){
    console.log(values);
    if(this.props.currentUser ){
      values.owner.username = this.props.currentUser.username;
    }else{
      values.owner.username = '';
    }

    this.props.dispatch(addmeal(values))
    return <Redirect to="/home" />
  }


  render(){
    return (
        <div className='page_styling'>
          <AddMealForm onSubmit={values => this.showResults(values)} />
        </div>
    )
  }  

}

const mapStateToProps = state =>{
  return {
    currentUser : state.auth.currentUser  
  }
  
}


export default connect(mapStateToProps)(AddMealPage);