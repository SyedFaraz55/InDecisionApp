import React, { Component } from 'react'

export default class AddOption extends Component {
    state={
        error:undefined
    }
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        
    }
    onFormSubmit(event) {
    
        event.preventDefault();
        const option = event.target.elements.option.value;

        const error = this.props.handleAddOption(option)
        event.target.elements.option.value = ''

        this.setState(() => ({ error }))

    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onFormSubmit}>
                    <input className="add-option__input" type="text" name="option" id="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

