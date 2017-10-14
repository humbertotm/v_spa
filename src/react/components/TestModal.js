import React, { Component } from 'react';
import Modal from 'react-modal';
import TestForm from '../../redux-form/TestForm';

class TestModal extends Component {
    render() {
        const { modalIsOpen, toggleModal, formSubmit } = this.props
        return(
            <div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel='test-modal' >
                    <h1>This is a Test Modal working with Redux!</h1>
                    <TestForm onSubmit={formSubmit} />
                </Modal>
            </div>
        );
    }
}

export default TestModal
