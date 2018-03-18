import React from 'react';
import ReactDOM from 'react-dom';
import FilterSection from './filterSection';
import { Provider } from 'react-redux';
import {shallow} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';

describe('<FilterSection />', ()=>{
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <FilterSection />
      </Provider>);
    });
  
})