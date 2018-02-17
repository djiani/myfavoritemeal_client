import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import './addMealForm.css';


export class AddMealForm extends React.Component {

  

  render(){ 
    const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={placeholder} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
    const renderField2 = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
      <div className="inlineBlock">
        <input {...input} type={type} placeholder={placeholder} />
        {touched && error && <span>{error}</span>}
      </div>
     
    );



    const renderIngredients = ({fields, meta: { touched, error, submitFailed } }) => (
      <div>
        <ul>
          {fields.map((element, index) => (
            <li key={index}>
              <div>
                <Field
              name={`${element}.name`}
              type="text"
              component={renderField2}

            />
                <button type="button" title="Remove element" onClick={() => fields.remove(index)}>
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <a  onClick={() => fields.push({})}>Add new ingredient...</a>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </div>
      </div>
    );

    const renderDirections = ({fields, meta: { touched, error, submitFailed } }) => (
      <div>
        <ul>
          {fields.map((element, index) => (
            <li key={index}>
              <div>
                <Field
              name={`${element}.name`}
              type="text"
              component={renderField2}

            />
                <button type="button" title="Remove element" onClick={() => fields.remove(index)}>
                  remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <a  onClick={() => fields.push({})}>Add new step...</a>
          {(touched || submitFailed) && error && <span>{error}</span>}
        </div>
      </div>
    );

    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="mealName"
          type="text"
          component={renderField}
          label="Meal Name"
          placeholder="Meal Name"
        />
        <div>
          <label>Description</label>
          <div>
            <Field name="description" component="textarea" />
          </div>
        </div>

        <div>
          <label>Difficulty:</label>
          <div>
            <label>
              <Field name="difficulty" component="input" type="radio" value="easy" />
              {' '}
              Easy
              {'   '}
            </label>
            <label>
              <Field name="difficulty" component="input" type="radio" value="intermediate" />
              {' '}
              Intermediate
              {'   '}
            </label>
            <label>
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
          name="owner"
          component= {renderField}
          type="text"
          label="Publish By"
          placeholder=""
        />
        <div className="list_ingredients">
          <h3> List ingredients </h3>
          <FieldArray name="ingredients" component={renderIngredients} />
        </div>

        <div className="list_ingredients">
          <h3> Cooking direction </h3>
          <FieldArray name="directions" component={renderDirections} />
        </div>
       
        
        <div>
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
          <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
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
