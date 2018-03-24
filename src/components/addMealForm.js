
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {API_BASE_URL} from '../config';
import axios from 'axios';
import RenderField from './renderField';
import {required, nonEmpty} from '../validators';
//import {normalizeResponseErrors} from '../utils';

import './addMealForm.css';


export class AddMealForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file_url: null,
      loading: false

    };
  }
  
  handleFileUpload(event){
    event.preventDefault();
    this.setState({loading: true});
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('filename', event.target.files[0].name )
    for(var value of formData.values() ){
      console.log(value);
    }
    
    axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    }).then(response => {
      // handle your response;
      console.log(response);
      this.setState({
        file_url : response.data.location,
        loading: false});

    }).catch(error => {
      // handle your error
      this.setState({
        file_url : '',
        loading:false});
    });
  }

  // handleFileUpload2(event){
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);
  //   fetch(`${API_BASE_URL}/upload/`, {
  //     method: 'POST',
  //     headers: {
  //         'Content-type': 'multipart/form-data'
  //       },
  //     data: event.target.files[0]
  //   })
  //   .then(res =>{
  //     console.log(res);
  //   })
  //   .catch(err => {
  //    console.log('error ...');   
  //   })
  // }
  

  onSubmit(values){
    if(this.state.loading){
      alert("Please, wait the the image to load!!!!");
    }else {
      if(!this.state.file_url){
        values.image_url = ''
      }else{
        values.image_url = this.state.file_url;
      }
      if(!values.ingredients){
        values.ingredients = [];
      }
      if(!values.directions){
        values.directions = []
      }
    
    console.log(values);
    this.props.onSubmit(values);
    }
    
  }

  render(){ 
    // const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
    //   <div >
    //     <label>{label}</label>
    //     <div>
    //       <input {...input} type={type} placeholder={placeholder} ref={input => (this.input = input)} className="input_length"/>
    //       {touched && error && <span>{error}</span>}
    //     </div>
    //   </div>
    // );

    let ImgPreview;
    if(this.state.file_url){
      ImgPreview = (
        <div>
        <img className='image-preview' src={this.state.file_url}  alt="test" />
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
          component={RenderField}
          label="Meal Name"
          placeholder="Meal Name"
          className="input_length"
          validate={[required, nonEmpty]}
        />
        <div>
          <label>Description</label> 
          <div>
            <Field name="description" component="textarea" className="input_length" validate={[required, nonEmpty]}/>
          </div>
        </div>

        <div>
          <label>Category</label>
          <div>
            <Field name="category" component="select" className="input_length" validate={[required, nonEmpty]}>
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
              <Field name="difficulty" component="input" type="radio" value="easy" validate={[required, nonEmpty]}/>
              {' '}
              Easy
              {'   '}
            </label>
            <label className="radio_label">
              <Field name="difficulty" component="input" type="radio" value="intermediate" validate={[required, nonEmpty]}/>
              {' '}
              Intermediate
              {'   '}
            </label>
            <label className="radio_label">
              <Field name="difficulty" component="input" type="radio" value="difficult" validate={[required, nonEmpty]}/>
              {' '}
              Difficult
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
          validate={[required, nonEmpty]}
        />
      
        <Field
          name="served"
          component= {RenderField}
          type="number"
          label="Served"
          placeholder="0"
          className="input_length"
          validate={[required, nonEmpty]}
        />
         <Field
          name="owner.name"
          component= {RenderField}
          type="text"
          label="Publish By"
          placeholder=""
          className="input_length"
          validate={[required, nonEmpty]}
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
