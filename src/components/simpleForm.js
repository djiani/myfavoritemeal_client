import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ListElement from './listElement';

export class AddMealForm extends React.Component {

  

  render(){ 
  return (
    <form onSubmit={this.props.handleSubmit}>
      <div>
        <label>Meal Name</label>
        <div>
          <Field
            name="mealName"
            component="input"
            type="text"
            placeholder="meal Name"
          />
        </div>
      </div>
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
            {' '}
          </label>
          <label>
            <Field name="difficulty" component="input" type="radio" value="intermediate" />
            {' '}
            Intermediate
            {' '}
          </label>
          <label>
            <Field name="difficulty" component="input" type="radio" value="hard" />
            {' '}
            Hard
            {' '}
          </label>
        </div>
      </div>

      <div>
        <label>Hands_on: </label>
        <div>
          <Field
            name="hands_on"
            component="input"
            type="number"
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <label>Served: </label>
        <div>
          <Field
            name="served"
            component="input"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
      <div>
        <label>Publish By: </label>
        <div>
          <Field
            name="owner"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div>
      <h1> List of Ingredients </h1>
      <ListElement ingredients={this.props.ingredients} />
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
  form: 'simple', // a unique identifier for this form
})(AddMealForm);
