import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
 
import {shallow} from 'enzyme';

decribe('< />', (){
  it('renders without crashing', () => {
    shallow(<Dashboard />);
  });
}