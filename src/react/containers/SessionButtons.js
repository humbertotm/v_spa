import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OpenButton from '../components/OpenButton';
import LogInForm from '../../redux-form/formComponents/LogInForm';
import SignUpForm from '../../redux-form/formComponents/SignUpForm';
import SessionModal from '../components/SessionModal';
import { toggleModal } from '../../redux/actions/modal';
import { setFormPurpose } from '../../redux/actions/setFormPurpose';

class SessionButtons extends Component {
    constructor() {
        super()
        this.setFormToRenderAndOpenModal = this.setFormToRenderAndOpenModal.bind(this)
        this.setFormTitle = this.setFormTitle.bind(this)
        this.setFormToRender = this.setFormToRender.bind(this)
        this.renderSignUpForm = this.renderSignUpForm.bind(this)
        this.renderLogInForm = this.renderLogInForm.bind(this)
    }

    renderLogInForm(additionalProp) {
        return(
            <div>
                <LogInForm toggleModal={additionalProp} />
            </div>
        );
    }

    renderSignUpForm() {
        return(
            <div>
                <SignUpForm />
            </div>
        );
    }

    setFormToRender() {
        const { currentFormIs, toggleModal } = this.props

        if(currentFormIs === 'signup') return this.renderSignUpForm();

        return this.renderLogInForm(toggleModal);
    }

    setFormTitle() {
        const { currentFormIs } = this.props

        if(currentFormIs === 'signup') return 'Sign Up';
        return 'Log In';
    }

    setFormToRenderAndOpenModal(formToRender) {
        const { setFormPurpose,
                toggleModal } = this.props

        setFormPurpose(formToRender);
        toggleModal();
    }

    render() {
        const { modalIsOpen,
                toggleModal } = this.props

        return(
            <div>
                <OpenButton buttonText={'signup'}
                        actionToPerform={this.setFormToRenderAndOpenModal} />
                <OpenButton buttonText={'login'}
                        actionToPerform={this.setFormToRenderAndOpenModal} />
                <SessionModal modalIsOpen={modalIsOpen}
                          toggleModal={toggleModal}
                          setFormTitle={this.setFormTitle}
                          setFormToRender={this.setFormToRender} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentFormIs: state.sessionModalForm.currentFormIs,
        modalIsOpen: state.modalIsOpen.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal())
        },
        setFormPurpose: (formPurpose) => {
            dispatch(setFormPurpose(formPurpose))
        }
    }
}

SessionButtons.propTypes = {
    currentFormIs: PropTypes.string,
    toggleModal: PropTypes.func,
    setFormPurpose: PropTypes.func,
    modalIsOpen: PropTypes.bool
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionButtons)