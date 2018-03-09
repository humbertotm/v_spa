import React, { Component } from 'react';

class OpenButton extends Component {
    constructor() {
        super()
        this.performAction = this.performAction.bind(this)
    }

    performAction() {
        const { buttonText,
                actionToPerform } = this.props

        actionToPerform(buttonText)

    }

    render() {
        const { actionToPerform, buttonText } = this.props
        return(
            <div>
                <button onClick={this.performAction} type="button">{buttonText}</button>
            </div>
        );
    }
}

export default OpenButton
