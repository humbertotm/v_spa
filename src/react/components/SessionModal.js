import React, { Component } from 'react';
import Modal from 'react-modal';
import LogInForm from '../../redux-form/formComponents/LogInForm';
import SignUpLogInPrompt from './SignUpLogInPrompt';

class SessionModal extends Component {
    constructor() {
        super()
        this.setFormTitle = this.setFormTitle.bind(this)
    }

    setFormTitle() {
        const { currentFormIsSignUp } = this.props

        if(currentFormIsSignUp) return 'Sign Up';

        return 'Log In';
    }

    render() {
        const { modalIsOpen,
                toggleModal,
                toggleFormPurpose,
                currentFormIsSignUp } = this.props
        return(
            <div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel='test-modal' >
                    <h1>{this.setFormTitle()}</h1>
                    <LogInForm />
                    <SignUpLogInPrompt toggleFormPurpose={toggleFormPurpose}
                                       currentFormIsSignUp={currentFormIsSignUp} />
                </Modal>
            </div>
        );
    }
}

export default SessionModal
