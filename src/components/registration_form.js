import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import './registration_form.css';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {

        const renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => (
          <div >
            <label>{label} {touched && error && <span className="error">{error}</span>}</label>
            <div>
              <input {...input} type={type} placeholder={placeholder} className="input_length"/>
              
            </div>
          </div>
        );

        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )} >
               <Field
                  name="firstName"
                  type="text"
                  component={renderField}
                  label="FirstName"
                />
                
                <Field
                  name="lastName"
                  type="text"
                  component={renderField}
                  label="LastName"
                />
                
                <Field
                  name="username"
                  type="text"
                  component={renderField}
                  label="Username"
                  validate={[required, nonEmpty, isTrimmed]}
                />

                <Field
                  name="password"
                  type="password"
                  component={renderField}
                  label="Password"
                  validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                  name="passwordConfirm"
                  type="password"
                  component={renderField}
                  label="Confirm Password"
                  validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting} className="submit_button">
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
