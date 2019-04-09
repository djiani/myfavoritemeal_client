import React from 'react';
import ReactDOM from 'react-dom';
import AddMealForm from './addMealForm';
 
import {shallow, mount} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';
import { Provider } from 'react-redux';

describe('<AddMealForm />', ()=>{
  it('renders without crashing', () => {
    shallow(<Provider store={store}>
        <AddMealForm />
      </Provider>)
  });



})