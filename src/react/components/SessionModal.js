import React, { Component } from 'react';
import Modal from 'react-modal';
import SessionForm from '../../redux-form/formComponents/SessionForm';
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
                    contentLabel='session-modal' >
                    <h1>{this.setFormTitle()}</h1>
                    <SessionForm currentFormIsSignUp={currentFormIsSignUp} />
                    <SignUpLogInPrompt toggleFormPurpose={toggleFormPurpose}
                                       currentFormIsSignUp={currentFormIsSignUp} />
                </Modal>
            </div>
        );
    }
}

export default SessionModal
