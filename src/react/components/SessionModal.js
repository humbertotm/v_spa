import React, { Component } from 'react';
import Modal from 'react-modal';
import LogInForm from '../../redux-form/formComponents/LogInForm';

class SessionModal extends Component {
    render() {
        const { modalIsOpen, toggleModal, handleSubmit } = this.props
        return(
            <div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel='test-modal' >
                    <h1>This is a Test Modal working with Redux!</h1>
                    <LogInForm />
                </Modal>
            </div>
        );
    }
}

export default SessionModal
