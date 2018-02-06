import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from '../components/OpenButton';
import SessionModal from '../components/SessionModal';
import { toggleModal } from '../../redux/actions/modal';
import { toggleFormPurpose } from '../../redux/actions/toggleFormPurpose';
import { connect } from 'react-redux';

class ModalButton extends Component {
    render() {
        const { modalIsOpen,
                toggleModal,
                toggleFormPurpose,
                currentFormIsSignUp } = this.props
        const buttonText = 'Sign up!';
        return(
            <div>
                <OpenButton actionToPerform={toggleModal}
                            buttonText={buttonText} />
                <SessionModal modalIsOpen={modalIsOpen}
                              toggleModal={toggleModal}
                              currentFormIsSignUp={currentFormIsSignUp}
                              toggleFormPurpose={toggleFormPurpose} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.modalIsOpen.isOpen,
        currentFormIsSignUp: state.signupLoginForm.currentFormIsSignUp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal())
        },
        toggleFormPurpose: () => {
            dispatch(toggleFormPurpose())
        }
    }
}

ModalButton.propTypes = {
    toggleModal: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    currentFormIsSignUp: PropTypes.bool,
    toggleForm: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalButton)
