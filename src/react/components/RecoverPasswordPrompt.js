import React, { Component } from 'react';

class RecoverPasswordPrompt extends Component {
    constructor() {
        super()
        this.setFormPurposeAndCleanErrorMsgs = this.setFormPurposeAndCleanErrorMsgs.bind(this)

    }

    setFormPurposeAndCleanErrorMsgs() {
        const { reset, setFormPurpose } = this.props
        const resetPassword = 'passReset'

        reset();
        setFormPurpose(resetPassword);
    }

    render() {
        return(
            <div onClick={this.setFormPurposeAndCleanErrorMsgs}>
                <a href='#'>
                    'Forgot password? Click here to recover it!'
                </a>
            </div>
        );
    }
}