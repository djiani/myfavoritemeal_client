import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

import {required, nonEmpty} from '../validators';
import './addMeal.css';

export class AddMeal extends React.Component {

  handleChange(value){
    console.log(value);
  }
  onSubmit(values) {
      //return this.props.dispatch(login(values.username, values.password));
      console.log(values);
  }

  render(){
    return(

      <form className="addMeal-form" >
        <div className="left_block">
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
                <input type="radio" value="Easy" checked ={true} onChange={value => this.handleChange(value)} />
                Easy
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="intermediate" checked ={false} onChange={value => this.handleChange(value)}/>
                Intermediate
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="hard" checked ={false} onChange={value => this.handleChange(value)}/>
                Hard
              </label>
            </div>
          </div>

          <div className=""> 
            <label htmlFor="name">Time:</label>
            <Field component={Input} type="number" name="hand_on" id="hand_on" />
          </div>

          <div className=""> 
            <label htmlFor="served">Served </label>
            <Field component={Input} type="number" name="served" id="served" />
          </div>

          <div className=""> 
            <label htmlFor="owner">publish by </label>
            <Field component={Input} type="text" name="owner" id="owner" />
          </div>
        </div>
        <div className="right_block">
          <div className="ingredients_block">
            <Field component={Input} type="text" name="ingredient" id="ingredient" />
            <button > add ingredient </button>
          </div>

          <div className="direction_block">
            <Field component={Input} type="text" name="direction" id="direction" />
            <button > add step </button>
          </div>
        </div>
        <div className="submit_block">
           <button disabled={this.props.pristine || this.props.submitting} className="submit_addMealBtn"> Submit </button>
        </div> 

      </form>
    );
  }


}

export default reduxForm({
    form: 'AddMealForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('searchRecipes'))
})(AddMeal);