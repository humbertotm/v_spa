import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import OpenButton from '../components/OpenButton';
import LogInForm from '../../redux-form/formComponents/LogInForm';
import SignUpForm from '../../redux-form/formComponents/SignUpForm';
import SessionModal from '../components/SessionModal';
import { toggleModal } from '../../redux/actions/modal';
import { setFormPurpose } from '../../redux/actions/setFormPurpose';
import logIn from '../../redux/actions/logIn';
import setErrorMessage from '../../redux/actions/setErrorMessage';

// Constants
import { loginEndpoint,
         signupEndpoint } from '../../utils/constantGlossary';

class SessionButtons extends Component {
    constructor() {
        super()
        this.setFormToRenderAndOpenModal = this.setFormToRenderAndOpenModal.bind(this)
        this.setFormTitle = this.setFormTitle.bind(this)
        this.setFormToRender = this.setFormToRender.bind(this)
        this.renderSignUpForm = this.renderSignUpForm.bind(this)
        this.renderLogInForm = this.renderLogInForm.bind(this)
        this.submitValidate = this.submitValidate.bind(this)
        this.setEndpoint = this.setEndpoint.bind(this)
        this.callApi = this.callApi.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
        this.buildReqDataObj = this.buildReqDataObj.bind(this)
        this.handleErrorForHttpStatus = this.handleErrorForHttpStatus.bind(this)
    }

    submitValidate(values) {
        const endpoint = this.setEndpoint()
        console.log(endpoint)

        return this.callApi(endpoint, values)
            .then(response => {
                console.log(response)
                this.handleSuccessfulResponse(response)
            })
            .catch(error => {
                console.log(error)
                this.handleErrorResponse(error)
            })
    }

    setEndpoint() {
        const { currentFormIs } = this.props

        if(currentFormIs === 'signup') return signupEndpoint;

        return loginEndpoint;
    }

    callApi(endpoint, values) {
        const reqDataObj = this.buildReqDataObj(values)
        console.log(reqDataObj)

        return axios({
            method: 'post',
            url: endpoint,
            data: reqDataObj
        })
    }

    buildReqDataObj(values) {
        // this method will build the data object based on the
        // keys present in the values object passed as arg.
        const keys = Object.keys(values)
        var dataObject = {}

        for(var i = 0; i < keys.length; i++) {
            dataObject[keys[i]] = values[keys[i]]
        }

        return dataObject
    }

    handleSuccessfulResponse(response) {
        const { logIn } = this.props
        logIn(response.data)
    }

    handleErrorResponse(error) {
        const { setErrorMessage } = this.props

        if(error.response) {
            console.log('error.response');
            console.log(error.response.status);
            this.handleErrorForHttpStatus(error.response.status);
        } else if(error.request) {
            console.log('error.request')
            setErrorMessage('No response received.')
        } else {
            console.log('error')
            setErrorMessage('Error on request.')
        }
    }

    handleErrorForHttpStatus(errorStatus) {
        // Possible error status from log in form
        if(errorStatus === 404) {
            throw new SubmissionError({
                _error: 'Email not found.'
            })
        }

        // Possible error status from sign up form
        if(errorStatus === 409) {
            throw new SubmissionError({
                _error: 'Email already in use.'
            })
        }

        throw new SubmissionError({
            _error: 'Some shit I have not decided how to handle happened.'
        })
    }

    renderLogInForm(additionalProp) {
        return(
            <div>
                <LogInForm toggleModal={additionalProp}
                           submitValidate={this.submitValidate} />
            </div>
        );
    }

    renderSignUpForm() {
        return(
            <div>
                <SignUpForm submitValidate={this.submitValidate} />
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
        },
        logIn: (data) => {
            dispatch(logIn(data))
        },
        setErrorMessage: (errorMessage) => {
            dispatch(setErrorMessage(errorMessage))
        }
    }
}

SessionButtons.propTypes = {
    currentFormIs: PropTypes.string,
    modalIsOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    setFormPurpose: PropTypes.func,
    logIn: PropTypes.func,
    setErrorMessage: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionButtons)