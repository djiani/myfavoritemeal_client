import React from 'react';
import ReactDOM from 'react-dom';
import addMealPage from './addMealPage';
 
import {shallow, mount} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';
import { Provider } from 'react-redux';

describe('<addMealPage />', ()=>{
  it('renders without crashing', () => {
    <Provider store={store}>
        <addMealPage />
      </Provider>
  });

  

})