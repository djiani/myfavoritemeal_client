import React from 'react';
import {connect} from 'react-redux';

import AddEltForm from './addEltForm';

import {addIngredient} from '../actions/meal';

export class AddListIngredient extends React.Component {
    addIngredient(text) {
        this.props.dispatch(addIngredient(text));
        //alert(text);
        //this.props.ingredients.push(text);
    }

    render() {
        
        const Ingredients = this.props.ingredients.map((ingredient, index) =>
            <li key={index}>
                <div className="ingredient">
                    {ingredient}
                </div>
            </li>  
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list_elt">
                    {Ingredients}
                </ul>
                <div>
                    <AddEltForm
                        type="ingredient"
                        onAdd={text => this.addIngredient(text)}
                    />
                </div>
            </div>
        );
    }
}

AddListIngredient.defaultProps = {
    title: '',
};

const mapStateToProps = state =>({
    ingredients: state.meal.newMeal.ingredients
})

export default connect(mapStateToProps)(AddListIngredient);
