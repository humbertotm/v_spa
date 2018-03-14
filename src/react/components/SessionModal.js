// Package imports
import React, { Component } from 'react';
import Modal from 'react-modal';

// Components
import FormToRender from './FormToRender';

class SessionModal extends Component {
    render() {
        const { modalIsOpen,
                toggleModal,
                setFormTitle,
                setFormToRender } = this.props
        return(
            <div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel='session-modal' >
                    <h1>{setFormTitle()}</h1>
                    <FormToRender setFormToRender={setFormToRender} />
                </Modal>
            </div>
        );
    }
}

export default SessionModal