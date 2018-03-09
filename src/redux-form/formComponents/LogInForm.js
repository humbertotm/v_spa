import axios from 'axios';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import logInSyncValidate from '../validations/logInSyncValidate';
import logIn from '../../redux/actions/logIn';
import setErrorMessage from '../../redux/actions/setErrorMessage';

// Constants
import { signupEndpoint,
         loginEndpoint } from '../../utils/constantGlossary';

class LogInForm extends Component {
    constructor() {
        super()
        this.renderField = this.renderField.bind(this)
        this.submitValidate = this.submitValidate.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleLogInFormError = this.handleLogInFormError.bind(this)
    }

    renderField({ input, label, type, meta: { touched, error } }) {
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }

    submitValidate(values, dispatch) {
        const endpoint = loginEndpoint

        return this.callApi(endpoint, values)
            .then(response => {
                this.handleSuccessfulResponse(response, dispatch)
            })
            .catch(error => {
                this.handleErrorResponse(error, dispatch)
            })
    }

    setApiCallEndpoint() {
        const { currentFormIs } = this.props

        if(currentFormIs === 'login') return loginEndpoint;

        return signupEndpoint;
    }

    callApi(endpoint, values) {
        return axios({
            method: 'post',
            url: endpoint,
            data: {
                email: values.email,
                password: values.password
            }
        })
    }

    handleSuccessfulResponse(response, dispatch) {
        dispatch(logIn(response.data));
    }

    handleErrorResponse(error, dispatch) {
        this.handleLogInFormError(error, dispatch)
    }

    handleLogInFormError(error, dispatch) {
        if(error.response) {
            console.log('Log in error.response');
            console.log(error.response.status);
            this.handleErrorForHttpStatus(error.response.status);
        } else if(error.request) {
            console.log('error.request sign up')
            dispatch(setErrorMessage('No response received.'))
        } else {
            console.log('error sign up')
            dispatch(setErrorMessage('Error on request.'))
        }
    }

    handleErrorForHttpStatus(errorStatus) {
        if(errorStatus === 404) {
            throw new SubmissionError({
                _error: 'Email not found.'
            })
        }

        throw new SubmissionError({
            _error: 'Some shit I have not decided how to handle happened.'
        })
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, error,
                currentFormIs, toggleModal } = this.props

        return(
            <form onSubmit={handleSubmit(this.submitValidate)}>
                <Field
                    name='email'
                    type='email'
                    component={this.renderField}
                    label='Email' />
                <Field
                    name='password'
                    type='password'
                    component={this.renderField}
                    label='Password' />
                { error && <strong>{error}</strong> }
                <button type='submit'>Submit</button>
                <Link onClick={toggleModal} to='/resetpassword'>Forgot password?</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    validate: logInSyncValidate
})(LogInForm)
