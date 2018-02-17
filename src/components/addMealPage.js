import React from 'react';
//import AddMeal from './addMeal';
import {connect} from 'react-redux';
import AddMealForm from './addMealForm';
import {addmeal} from '../actions/meal';

import './addMealPage.css';

export class AddMealPage extends React.Component{

  showResults(values){
   this.props.dispatch(addmeal(values))
  }

  showResults2(values){
    console.log(values);
  }
  
  render(){
    return (
        <div className='meal_form_block'>
          <AddMealForm onSubmit={this.showResults2} />
        </div>
    )
  }  

}



export default connect()(AddMealPage);