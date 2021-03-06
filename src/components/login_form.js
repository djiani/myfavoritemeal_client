import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {login} from '../actions/auth';
import RenderField from './renderField';
import {required, nonEmpty} from '../validators';


export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
        //console.log(values);
    }


    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        // const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
        //   <div >
        //     <label>{label} {touched && error && <span className="error">{error}</span>}</label>
        //     <div>
        //       <input {...input} type={type} placeholder={placeholder} className="input_length"/>
              
        //     </div>
        //   </div>
        // );

        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )} >
                
                {error}
                
                <Field
                  name="username"
                  type="text"
                  component={RenderField}
                  label="Username"
                  id="username"
                  className="input_length"
                  validate={[required, nonEmpty]}
                />

                <Field
                  name="password"
                  type="password"
                  component={RenderField}
                  label="Password"
                  id="password"
                  className="input_length"
                  validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting} className="submit_button">
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
