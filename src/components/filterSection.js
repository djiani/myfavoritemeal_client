import React from 'react';
import {connect} from 'react-redux';
import {breakfastchecked, lunchchecked, dinnerchecked,
        easychecked, intermedchecked, difficultchecked} from '../actions/meal';
import './filterSection.css';


export class FilterSection extends React.Component{
  handleCheckBox(title){
    if(title === 'lunch'){
      //console.log('dispatch lunch checked action');
      this.props.dispatch(lunchchecked());
    }
    if(title === 'breakfast'){
     // console.log('dispatch breakfast checked action');
      this.props.dispatch(breakfastchecked());
    }
    if(title === 'dinner'){
     // console.log('dispatch dinner checked action');
      this.props.dispatch(dinnerchecked());
    }
    if(title === 'easy'){
     // console.log('dispatch easy checked action');
      this.props.dispatch(easychecked());
    }
    if(title === 'intermediate'){
      //console.log('dispatch intermediate checked action');
      this.props.dispatch(intermedchecked());
    }
    if(title === 'difficult'){
      //console.log('dispatch difficult checked action');
      this.props.dispatch(difficultchecked());
    }
    //
  }
  render(){ 
  return (
    <div className="filterClass">
      <div className="category alignLeft">
        <h3> Filter by Categories</h3>
        <label><input name="breakfast" type="checkbox" onChange={ () =>this.handleCheckBox('breakfast')}/> Breakfast</label><br/>
        <label><input name="lunch" type="checkbox"  onChange={ () =>this.handleCheckBox('lunch')} /> Lunch</label><br/>
        <label><input name="dinner" type="checkbox" onChange={ () =>this.handleCheckBox('dinner')} /> Dinner</label><br/>
      </div>

      <div className="category alignRight">
        <h3> Filter by Difficulty</h3>
        <label><input name="easy" type="checkbox" onChange={ () =>this.handleCheckBox('easy')}/> Easy</label><br/>
        <label><input name="intermediate" type="checkbox"  onChange={ () =>this.handleCheckBox('intermediate')} /> Intermediate</label><br/>
        <label><input name="difficult" type="checkbox" onChange={ () =>this.handleCheckBox('difficult')} /> Difficult</label><br/>
      </div>

    </div>

  )};
}

export default connect()(FilterSection);