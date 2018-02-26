import React from 'react';
//import AddMeal from './addMeal';
import {connect} from 'react-redux';
import AddMealForm from './addMealForm';
import {addmeal} from '../actions/meal';

import './addMealPage.css';


export class AddMealPage extends React.Component{

  showResults(values){
    console.log(values);
    this.props.dispatch(addmeal(values))
  }


  render(){
    return (
        <div className='meal_form_block'>
          <AddMealForm onSubmit={values => this.showResults(values)} />
        </div>
    )
  }  

}



export default connect()(AddMealPage);