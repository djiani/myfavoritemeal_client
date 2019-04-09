import React from 'react';
import ReactDOM from 'react-dom';
import Meal from './meal';
import {shallow, mount} from 'enzyme';

import store from '../store';
import localStorage from './mock_localStorage';
import { Provider } from 'react-redux';

describe('<Meal />', ()=>{
  it('renders without crashing', () => {
    shallow(<Provider store={store}>
        <Meal />
      </Provider>)
  });

  it('renders component with props', () => {
    const meal = {};
    const index = 1;
   const wrapper = shallow(<Provider store={store}>
        <Meal meal= {meal} indexMeal={index} key={index} />
      </Provider>)
    expect(wrapper.props().meal).toEqual(meal);
    expect(wrapper.props().indexMeal).toEqual(index);
  });
})