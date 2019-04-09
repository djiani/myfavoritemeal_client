import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login_form';
import {shallow, mount} from 'enzyme';
import localStorage from './mock_localStorage';
import store from '../store';
import { Provider } from 'react-redux';

describe('<LoginForm />', ()=>{
  it('renders without crashing', () => {
     <Provider store={store}>
        <LoginForm />
      </Provider>
  });
  
  // it('should fire a callback function when the form is submitted', ()=>{
  //   const callback =jest.fn();
  //   const wrapper = mount(<LoginForm />)
  //   wrapper.simulate('submit');
  // })
  
})