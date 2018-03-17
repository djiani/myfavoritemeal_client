import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import {shallow, mount} from 'enzyme';

describe('<App />', ()=>{
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  // it('should render children when passed it', ()=>{
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.hasClass('App-header')).toEqual(true);
  // })

})
