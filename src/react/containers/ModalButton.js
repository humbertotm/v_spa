import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from '../components/OpenButton';
import TestModal from '../components/TestModal';
import { toggleModal } from '../../redux/actions/modal';
import { connect } from 'react-redux';

class ModalButton extends Component {
    render() {
        const { modalIsOpen, toggleModal } = this.props
        const buttonText = 'Open Test Modal';
        return(
            <div>
                <OpenButton actionToPerform={toggleModal}
                            buttonText={buttonText} />
                <TestModal modalIsOpen={modalIsOpen}
                           toggleModal={toggleModal} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.modalIsOpen.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal())
        }
    }
}

ModalButton.propTypes = {
    toggleModal: PropTypes.func,
    modalIsOpen: PropTypes.bool
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalButton)
