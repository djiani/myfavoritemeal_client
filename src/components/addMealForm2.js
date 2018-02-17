import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import AddListIngredient from './addListIngredient';
import AddListDirection from './addListDirection';
export class AddMealForm extends React.Component {
  constructor(props){
    super(props);
    this.addIngFlag = true;
  }
  setAddIngredFlag(editing) {
        this.addIngFlag = editing;
    }

  

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

const renderElements = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    {fields.map((element, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove element"
          onClick={() => fields.remove(index)}
        >remove</button>

        <Field
          name={`${element}.name`}
          type="text"
          component={renderField}
          label={`${element}name`}
        />
      </li>
    )
    )}
    <li>
    <button  onClick={() => fields.push({})}>Add</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      <button >Close</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      
    </li>
    
  </ul>
);

const IngredientElts = () =>{if(this.addIngFlag){
        return (<div>
          <a  href='#' onClick={() => this.setAddIngredFlag(false)}>Add new ingredients</a>
        </div>);
    }
    else{
      return( 
      <FieldArray name="Ingredients" component={renderElements} />);
    }};

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
    
    <div>
    <IngredientElts />
    </div>
      

      <div>
        <AddListIngredient  title="List of Ingredients" />
      </div>

      <div>
        <AddListDirection  title="Cooking Directions" />
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
