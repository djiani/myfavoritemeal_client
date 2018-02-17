import React from 'react';

import './addEltForm.css';

export default class AddEltForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(this.textInput.value);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                    <a href="#" >Add a new {this.props.type}...</a>
                </div>
            );
        }

        return (
            <div className="card add-form" >
                <input type="text" ref={input => this.textInput = input} />

                <button onClick={this.handleOnClick} className="buttonElt">Add</button>
                <button type="button" onClick={() => this.setEditing(false)} className="buttonElt">
                    Close
                </button>
            </div>
        );
    }
}
