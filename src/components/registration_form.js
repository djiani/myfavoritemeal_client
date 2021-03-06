import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import RenderField from './renderField';

import './registration_form.css';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        //console.log('checking onSubmit new user...')
        //console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values) )} >
               <Field
                  name="firstName"
                  type="text"
                  component={RenderField}
                  label="FirstName"
                  validate={[required, nonEmpty]}
                  className="input_length"
                />
                
                <Field
                  name="lastName"
                  type="text"
                  component={RenderField}
                  label="LastName"
                  validate={[required, nonEmpty]}
                  className="input_length"
                />
                
                <Field
                  name="username"
                  type="text"
                  component={RenderField}
                  label="Username"
                  validate={[required, nonEmpty, isTrimmed]}
                  className="input_length"
                />

                <Field
                  name="password"
                  type="password"
                  component={RenderField}
                  label="Password"
                  validate={[required, passwordLength, isTrimmed]}
                  className="input_length"
                />
                <Field
                  name="passwordConfirm"
                  type="password"
                  component={RenderField}
                  label="Confirm Password"
                  validate={[required, nonEmpty, matchesPassword]}
                  className="input_length"
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

 