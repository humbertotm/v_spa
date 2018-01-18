import React, { Component } from 'react';
import Modal from 'react-modal';
import TestForm from '../../redux-form/formComponents/TestForm';

class TestModal extends Component {
    render() {
        const { modalIsOpen, toggleModal, handleSubmit } = this.props
        return(
            <div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel='test-modal' >
                    <h1>This is a Test Modal working with Redux!</h1>
                    <TestForm />
                </Modal>
            </div>
        );
    }
}

export default TestModal
