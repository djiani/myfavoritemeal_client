
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {API_BASE_URL} from '../config';

//import {normalizeResponseErrors} from '../utils';

import './addMealForm.css';


export class AddMealForm extends React.Component {
  constructor(props){
    super(props);
    this.image_url = "peter.jpg";
  }

  handleFiles(event){
    return fetch(`${API_BASE_URL}/upload/${this.fileInput.files[0].name}`)
    .then(res =>{
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      res.json();
    })
    .then(url_data => {
      console.log(url_data)
      //udapte image_url with the true path from aws
    })
    .catch(err =>{ 
      console.log(err)
    });
  }

 

  
  
  onSubmit(values){
    values.image_url = this.image_url;
    console.log(values);
    this.props.onSubmit(values);
  }

  render(){ 
    const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
      <div >
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={placeholder} className="input_length"/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );



    const renderIngredients = ({fields, info, meta: { touched, error, submitFailed } }) => (
      <div>
        <ul>
          {fields.map((element, index) => (
            <li key={index}>
              <div>
                <Field name={`${element}.name`} component="textarea" className="input_length_2"/>
                <button type="button" title="Remove element" onClick={() => fields.remove(index) } className="input_length_remove_btn">
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <a  onClick={() => fields.push({})}>Add new {info}...</a>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </div>
      </div>
    );


    return (
      <form onSubmit={this.props.handleSubmit(values=> this.onSubmit(values))}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Meal Name"
          placeholder="Meal Name"
        />
        <div>
          <label>Description</label>
          <div>
            <Field name="description" component="textarea" className="input_length"/>
          </div>
        </div>

        <div>
          <label>Category</label>
          <div>
            <Field name="category" component="select" className="input_length" >
              <option value="">--</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </Field>
          </div>
        </div>

        <div>
          <label>Difficulty:</label>
          <div className="radio_block input_length">
            <label className="radio_label">
              <Field name="difficulty" component="input" type="radio" value="easy" />
              {' '}
              Easy
              {'   '}
            </label>
            <label className="radio_label">
              <Field name="difficulty" component="input" type="radio" value="intermediate" />
              {' '}
              Intermediate
              {'   '}
            </label>
            <label className="radio_label">
              <Field name="difficulty" component="input" type="radio" value="hard" />
              {' '}
              Hard
              {' '}
            </label>
          </div>
        </div>

        
        <Field
          name="hands_on"
          component= {renderField}
          type="number"
          label="Hands_on"
          placeholder="0"
        />
      
        <Field
          name="served"
          component= {renderField}
          type="number"
          label="Served"
          placeholder="0"
        />
         <Field
          name="owner.name"
          component= {renderField}
          type="text"
          label="Publish By"
          placeholder=""
        />
        <div className="list_ingredients">
          <h3> List ingredients </h3>
          <FieldArray name="ingredients" info="ingredient" component={renderIngredients} />
        </div>

        <div className="list_ingredients">
          <h3> Cooking direction </h3>
          <FieldArray name="directions"  info="step" component={renderIngredients} />
        </div>

        <div className="list_ingredients">
          <h3>Upload Pictures</h3>
          <div>
            <input name="image_url" component="input" type="file" accept="image/*" 
            onChange={event => this.handleFiles(event)} ref={input => {
              this.fileInput = input;
            }}  className="input_length" />
          </div>
          <div>
            <img src={this.image_url} alt="testmodified"/>
          </div>

        </div>
        
  
        
        <div>
          <button type="submit" disabled={this.props.pristine || this.props.submitting} className="submit_button2">Submit</button>
          <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset} className="cancel_button2">
            Clear Values
          </button>
        </div>
      </form>
    );
  }
};


export default reduxForm({
  form: 'addMealForm', 
})(AddMealForm);
