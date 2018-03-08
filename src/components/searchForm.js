import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import RenderField from './renderField';

import {required, nonEmpty} from '../validators';
import {API_BASE_URL} from '../config';
import {loadMealDataSuccess, loadMealDataFailure} from '../actions/meal';
import './searchForm.css';

export class SearchForm extends React.Component {
  onSubmit(values) {
    //console.log(values);
    return fetch(`${API_BASE_URL}/meals/${values.searchRecipes}`)
        .then(res =>{
          if(!res.ok){
            return Promise.reject(res.statusText);
          }
         // console.log(res.json())
          return res.json();
        })
        .then(meals => {
          console.log(meals)
          this.props.dispatch(loadMealDataSuccess(meals)); 
        })
        .catch(err =>{ 
          console.log(err)
          this.props.dispatch(loadMealDataFailure(err))

        });
    }
      
 
  render() {
    // const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
    //   <div>
    //     <label>{label}</label>
    //     <div>
    //       <input {...input} type={type} placeholder={placeholder} className="input_length"/>
    //       {touched && error && <span>{error}</span>}
    //     </div>
    //   </div>
    // );

    return (
      
        <form className="search-form" onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values) )} >
            <Field 
              component= {RenderField}
              name="searchRecipes"
              type="text"
              label= "Search Recipes"
              className="input_length_2"
              validate={[required, nonEmpty]}
              />

            
            <button disabled={this.props.pristine || this.props.submitting} className="submit_button"> Search </button>
        </form>
    );
    
    }
}

export default reduxForm({
    form: 'SearchForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('searchRecipes'))
})(SearchForm);

