import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landing_page';
 
import {shallow, mount} from 'enzyme';
import store from '../store';
import localStorage from './mock_localStorage';
import { Provider } from 'react-redux';

describe('<LandingPage />', ()=>{
  it('renders without crashing', () => {
    <Provider store={store}>
        <LandingPage />
      </Provider>
  });

  // it('should render children when passed it', ()=>{
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.hasClass('App-header')).toEqual(true);
  // })

})