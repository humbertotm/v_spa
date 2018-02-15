import React, { Component } from 'react';

class SignUpLogInPrompt extends Component {
    constructor() {
        super()
        this.signUpLogInPrompt = this.signUpLogInPrompt.bind(this)
        this.toggleFormAndCleanErrorMsgs = this.toggleFormAndCleanErrorMsgs.bind(this)
    }

    signUpLogInPrompt() {
        const { currentFormIsSignUp } = this.props
        const signUpPrompt = 'No account yet? Sign up!'
        const logInPrompt = 'Have an account already? Log in!'

        if(currentFormIsSignUp) return logInPrompt;
        return signUpPrompt;
    }

    toggleFormAndCleanErrorMsgs() {
        const { reset, toggleFormPurpose } = this.props

        reset();
        toggleFormPurpose();
    }

    render() {
        // const { toggleFormPurpose } = this.props
        return(
            <div onClick={this.toggleFormAndCleanErrorMsgs}>
                <a href='#'>
                    {this.signUpLogInPrompt()}
                </a>
            </div>
        );
    }
}

export default SignUpLogInPrompt