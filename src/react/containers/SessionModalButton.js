import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from '../components/OpenButton';
import SessionModal from '../components/SessionModal';
import { toggleModal } from '../../redux/actions/modal';
import { setFormPurpose } from '../../redux/actions/setFormPurpose';
import { connect } from 'react-redux';

class SessionModalButton extends Component {
    render() {
        const { modalIsOpen,
                toggleModal,
                setFormPurpose,
                currentFormIs } = this.props
        const buttonText = 'Sign up!';
        return(
            <div>
                <OpenButton actionToPerform={toggleModal}
                            buttonText={buttonText} />
                <SessionModal modalIsOpen={modalIsOpen}
                              toggleModal={toggleModal}
                              currentFormIs={currentFormIs}
                              setFormPurpose={setFormPurpose} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.modalIsOpen.isOpen,
        currentFormIs: state.sessionModalForm.currentFormIs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal())
        },
        setFormPurpose: () => {
            dispatch(setFormPurpose())
        }
    }
}

SessionModalButton.propTypes = {
    toggleModal: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    currentFormIs: PropTypes.string,
    setFormPurpose: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionModalButton)
