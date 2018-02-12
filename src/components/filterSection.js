import React from 'react';
import './filterSection.css';


export default function FilterSection(props){

  return (
    <div className="filterClass">
      
      <h3> Categories</h3>
      <div className="category">
        <label><input name="breakfast" type="checkbox"  /> Breakfast</label><br/>
        <label><input name="lunch" type="checkbox"  /> Lunch</label><br/>
        <label><input name="dinner" type="checkbox"  /> Dinner</label><br/>
      </div>

      <div> 

      </div>


    </div>

  )
}