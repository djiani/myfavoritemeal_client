import React from 'react';
import ReactDOM from 'react-dom';
import MealList from './mealList';
import {shallow, mount} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';
import { Provider } from 'react-redux';

describe('<MealList />', ()=>{
  it('renders without crashing', () => {
   shallow (<Provider store={store}>
      <MealList />
    </Provider>)
  });

  it('should render children when passed it', ()=>{
    const wrapper = shallow (
      <Provider store={store}>
        <MealList />
      </Provider>);
    //expect(wrapper.hasClass('mealList')).toEqual(true);
  })

})