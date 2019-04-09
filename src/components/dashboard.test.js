import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import { Provider } from 'react-redux';
import {shallow, mount} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';
import SearchSection from './searchSection'

describe('<Dashboard />', ()=>{
  
  
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Dashboard />
      </Provider>
     );
   });

  // it('should render children when passed it', ()=>{
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <Dashboard />
  //     </Provider>
  //    );
  //    expect(wrapper.contains(<SearchSection />)).toEqual(true);
  //    //expect(wrapper.constains(<MealList />)).toEqual(true);
  // })


})