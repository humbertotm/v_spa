import React, { Component } from 'react';

class OpenButton extends Component {
    constructor() {
        super()
        this.performAction = this.performAction.bind(this)
    }

    // This method is a workaround. There should be no methods in
    // this dumb component.
    performAction() {
        const { buttonText,
                actionToPerform } = this.props

        actionToPerform(buttonText)

    }

    // Have not been able to fire actionToPerform by providing it to
    // the onClick event handler as actionToPerform(buttonText).
    // Find out why in order to get rid of the necessity to use the
    // workaround method performAction()
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
