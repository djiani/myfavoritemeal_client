import React from 'react';

import SearchForm from './searchForm';
import FilterSection from './filterSection'
import './searchSection.css';

export default class SearchSection extends React.Component{
  

  render(){
    return (
      <div className="searchSection">
       <SearchForm />
       <FilterSection />
      </div>
    );
  }
}