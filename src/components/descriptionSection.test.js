import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionSection from './descriptionSection';
 
import {shallow} from 'enzyme';

describe('<DescriptionSection />', ()=>{
  it('renders without crashing', () => {
    shallow(<DescriptionSection/>);
  });
  it('should have class descriptionSection', ()=>{
    const wrapper = shallow(<DescriptionSection />);
    expect(wrapper.hasClass('descriptionSection')).toEqual(true);
  })
})