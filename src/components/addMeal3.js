import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, focus} from 'redux-form';
import {FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox, Radio, Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddMeal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  onSubmit(values) {
      //return this.props.dispatch(login(values.username, values.password));
      console.log(values);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }




  render() {
    const formInstance = (
  <form  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup id="formControlsPassword" label="Password" type="password" />
    

    <FormGroup>
      <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
      <Checkbox inline>3</Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio name="radioGroup" inline>
        1
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        2
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">others</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <Button type="submit" >Submit </Button>
  </form>
);
    return (
      formInstance
    );
  }
}

export default reduxForm({
    form: 'AddMealForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('searchRecipes'))
})(AddMeal);