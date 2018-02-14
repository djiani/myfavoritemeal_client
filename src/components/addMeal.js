import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

import {required, nonEmpty} from '../validators';
import './searchForm.css';

export class AddMeal extends React.Component {
  onSubmit(values) {
      //return this.props.dispatch(login(values.username, values.password));
      console.log(values);
  }

  render(){
    return(

      <form className="addMeal-form" >
        <div>
          <label htmlFor="name">recipes Name </label>
          <Field component={Input} type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="name">Description </label><br/>
          <textarea value="short description on the meal here" /> 
        </div>
        <div className="radio-group">
          <label htmlFor="difficulty">Difficulty </label>
          <div className="radio">
            <label>
              <input type="radio" value="Easy" checked ={true}/>
              Easy
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="intermediate" checked ={false}/>
              Intermediate
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="hard" checked ={false}/>
              Hard
            </label>
          </div>
        </div>

        <div className=""> 
          <label htmlFor="name">hans_on</label>
          <Field component={Input} type="number" name="hand_on" id="hand_on" />
        </div>

        <div className=""> 
          <label htmlFor="served">Served </label>
          <Field component={Input} type="number" name="served" id="served" />
        </div>

        <div className=""> 
          <label htmlFor="owner">publish by </label>
          <Field component={Input} type="text" name="" id="owner" />
        </div>



        <button disabled={this.props.pristine || this.props.submitting} className="search_btn"> Search </button>
      </form>
    );
  }


}

export default reduxForm({
    form: 'AddMealForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('searchRecipes'))
})(AddMeal);