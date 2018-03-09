import React, { Component } from 'react';

class SignUpLogInPrompt extends Component {
    constructor() {
        super()
        this.signUpLogInPrompt = this.signUpLogInPrompt.bind(this)
        this.setFormPurposeFuncArg = this.setFormPurposeFuncArg.bind(this)
        this.toggleFormAndCleanErrorMsgs = this.toggleFormAndCleanErrorMsgs.bind(this)
    }

    signUpLogInPrompt() {
        const { currentFormIs } = this.props
        const signUpPrompt = 'No account yet? Sign up!'
        const logInPrompt = 'Have an account already? Log in!'

        if(currentFormIs === 'signup') return logInPrompt;
        return signUpPrompt;
    }

    setFormPurposeFuncArg() {
        const { currentFormIs } = this.props
        const signup = 'signup'
        const login = 'login'

        if(currentFormIs === signup) return login;
        return signup;
    }

    toggleFormAndCleanErrorMsgs() {
        const { reset, setFormPurpose } = this.props

        reset();
        setFormPurpose(this.setFormPurposeFuncArg());
    }

    render() {
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