import React from 'react';
import ReactDOM from 'react-dom';
import FilterSection from './filterSection';
 
import {shallow} from 'enzyme';

decribe('<FilterSection />', (){
  it('renders without crashing', () => {
    shallow(<FilterSection/>);
  });
  
}