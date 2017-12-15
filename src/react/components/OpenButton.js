import React, { Component } from 'react';

class OpenButton extends Component {
    render() {
        const { actionToPerform, buttonText } = this.props
        return(
            <div>
                <button onClick={actionToPerform} type="button">{buttonText}</button>
            </div>
        );
    }
}

export default OpenButton
