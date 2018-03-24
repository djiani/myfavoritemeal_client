
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../config';
import axios from 'axios';
import RenderField from './renderField';


//import {normalizeResponseErrors} from '../utils';

import './addMealForm.css';


export class UpdateMealForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file_url: '',
      loading: false

    };
  }

  handleFileUpload(event){
    event.preventDefault();
    this.setState({loading: true});
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    axios.post(`${API_BASE_URL}/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      // handle your response;
      this.setState({
        file_url : response.data.location,
        loading: false});

    }).catch(error => {
      // handle your error
      this.setState({
        file_url : null,
        loading:false});
    });
  }

  // handleFileUpload2(event){
  //   this.setState({file: event.target.files});

  // }
 

  
  
  onSubmit(values){
    if(this.state.loading){
      alert("Please, wait the the image to load!!!!");
    }else {
      if(!values.ingredients){
        values.ingredients = [];
      }
      if(!values.directions){
        values.directions = []
      }
      if(this.state.file_url){
        values.image_url = this.state.file_url
      }else if(this.props.meal.meal){
        values.image_url = this.props.meal.meal.image_url
      }else{
        values.image_url = ''
      }

    this.props.onSubmit(values);
    }
    
  }

  handleCancel(event){
    event.preventDefault();
    ///console.log('check history in handleCancel')
    //console.log(this.props.history)
    this.props.history.push('/home')
    //return <Redirect to="/home" />
  }

  render(){ 
    let ImgPreview;
    if(this.state.file_url){
      ImgPreview = (
        <div>
          <img className='image-preview' src={this.state.file_url}  alt="test" />
        </div>
      )
    }else if(this.props.meal.meal){
      ImgPreview = (
        <div>
          <img className='image-preview' src={this.props.meal.meal.image_url}  alt="test" />
        </div>
      )
    }
    if(this.state.loading){
      ImgPreview = (
        <div>
          <h3> Loading image ... </h3>
        </div>
      )
    }


    const renderIngredients = ({fields, info, meta: { touched, error, submitFailed } }) => (
      <div>
        <ul>
          {fields.map((element, index) => (
            <li key={index}>
              <div>
                <Field name={`${element}`} component="textarea" className="input_length_2"/>
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
          component={RenderField}
          label="Meal Name"
          className="input_length"
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
          component= {RenderField}
          type="number"
          label="Hands_on"
          placeholder="0"
          className="input_length"
        />
      
        <Field
          name="served"
          component= {RenderField}
          type="number"
          label="Served"
          placeholder="0"
          className="input_length"
        />
         <Field
          name="owner.name"
          component= {RenderField}
          type="text"
          label="Publish By"
          placeholder=""
          className="input_length"
        />
        <div className="list_ingredients">
          <h3> List Ingredients </h3>
          <FieldArray name="ingredients" info="ingredient" component={renderIngredients} />
        </div>

        <div className="list_ingredients">
          <h3> Cooking Direction </h3>
          <FieldArray name="directions"  info="step" component={renderIngredients} />
        </div>

        <div className="list_ingredients">
          <h3>Upload Picture</h3>
          <div>
            <input name="image_url" component="input" type="file" accept="image/*" 
            onChange={event => this.handleFileUpload(event)} ref={input => {
              this.fileInput = input;}}  className=" block_center" />
          </div>
          <div>
            {ImgPreview}
          </div>

        </div>
        
  
        <div>
          <button type="submit" className="submit_button2">Update</button>
          <button type="button" onClick={event =>this.handleCancel(event)} className="cancel_button2">
            Cancel
          </button>
        </div>
      </form>
    );
  }
};


UpdateMealForm = reduxForm({
  form: 'updateMealForm', 
})(UpdateMealForm);

UpdateMealForm = connect(
  state =>({
    initialValues: state.meal.currentMeal.meal
  })
)(UpdateMealForm);


export default UpdateMealForm;
