import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login_form';
 
import {shallow, mount} from 'enzyme';

describe('<LoginForm />', ()=>{
  it('renders without crashing', () => {
    shallow(<LoginForm/>);
  });
  
  // it('should fire a callback function when the form is submitted', ()=>{
  //   const callback =jest.fn();
  //   const wrapper = mount(<LoginForm />)
  //   wrapper.simulate('submit');
  // })
})