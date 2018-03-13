import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import {shallow} from 'enzyme';

decribe('<App />', (){
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('check props on mount', ()=>{
    const wrapper = mount(<App />);
  })


})
