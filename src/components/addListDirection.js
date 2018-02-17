import React from 'react';
import {connect} from 'react-redux';

import AddEltForm from './addEltForm';

import {addDirection} from '../actions/meal';

export class AddListDirection extends React.Component {
    addDirection(text) {
        this.props.dispatch(addDirection(text));
    }

    render() {
        
        const directions = this.props.directions.map((direction, index) =>
            <li key={index}>
                <div className="direction">
                    {direction}
                </div>
            </li>  
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list_elt">
                    {directions}
                </ul>
                <div>
                    <AddEltForm
                        type="step"
                        onAdd={text => this.addDirection(text)}
                    />
                </div>
            </div>
        );
    }
}

AddListDirection.defaultProps = {
    title: '',
};

const mapStateToProps = state =>({
    directions: state.meal.newMeal.directions
})

export default connect(mapStateToProps)(AddListDirection);
