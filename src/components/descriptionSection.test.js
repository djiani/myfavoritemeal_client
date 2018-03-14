import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionSection from './descriptionSection';
 
import {shallow} from 'enzyme';

describe('<DescriptionSection />', ()=>{
  it('renders without crashing', () => {
    shallow(<DescriptionSection/>);
  });
})