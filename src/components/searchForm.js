import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

import {required, nonEmpty} from '../validators';
import './searchForm.css';

export class SearchForm extends React.Component {
  onSubmit(values) {
      //return this.props.dispatch(login(values.username, values.password));
      console.log(values);
  }
  render() {
    let error;
    if (this.props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }

    return (
        <form
            className="search-form"
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )} >
            {error}
            <label htmlFor="searchRecipes">Search Recipes </label>
            <Field
                component={Input}
                type="text"
                name="searchRecipes"
                id="searchRecipes"
                validate={[required, nonEmpty] }
            />
            <button disabled={this.props.pristine || this.props.submitting} className="search_btn"> Search </button>
        </form>
    );
    
    }
}

export default reduxForm({
    form: 'SearchForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('searchRecipes'))
})(SearchForm);

