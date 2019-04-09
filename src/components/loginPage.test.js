import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage';
import store from '../store';
import localStorage from './mock_localStorage';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';

describe('<LoginPage />', ()=>{
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <LoginPage />
      </Provider>
     );
  });

  // it('should render children when passed it', ()=>{
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.hasClass('App-header')).toEqual(true);
  // })

})