import axios from 'axios';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';
import signUpSyncValidate from '../validations/signUpSyncValidate';
import logIn from '../../redux/actions/logIn';
import setErrorMessage from '../../redux/actions/setErrorMessage';

// Constants
import { signupEndpoint,
         loginEndpoint } from '../../utils/constantGlossary';

class SignUpForm extends Component {
    constructor() {
        super()
        this.renderField = this.renderField.bind(this)
        this.submitValidate = this.submitValidate.bind(this)
        this.callApi = this.callApi.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
        this.handleSignUpFormError = this.handleSignUpFormError.bind(this)
        this.handleErrorForHttpStatus = this.handleErrorForHttpStatus.bind(this)
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
        const endpoint = signupEndpoint;

        return this.callApi(endpoint, values)
            .then(response => {
                this.handleSuccessfulResponse(response, dispatch)
            })
            .catch(error => {
                this.handleErrorResponse(error, dispatch)
            })
    }

    callApi(endpoint, values) {
        return axios({
            method: 'post',
            url: endpoint,
            data: {
                email: values.email,
                password: values.password,
                passwordConf: values.passwordConf
            }
        })
    }

    handleSuccessfulResponse(response, dispatch) {
        dispatch(logIn(response.data));
    }

    handleErrorResponse(error, dispatch) {
        this.handleSignUpFormError(error, dispatch)
    }

    handleSignUpFormError(error, dispatch) {
        if(error.response) {
            console.log('Sign up error.response');
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
        if(errorStatus === 409) {
            throw new SubmissionError({
                _error: 'Email already in use.'
            })
        }

        throw new SubmissionError({
            _error: 'Some shit I have not decided how to handle happened.'
        })
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, error,
                currentFormIs, setFormPurpose } = this.props

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
                <Field
                    name='passwordConf'
                    type='password'
                    component={this.renderField}
                    label='Password confirmation' />
                { error && <strong>{error}</strong> }
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup',
    validate: signUpSyncValidate
})(SignUpForm)
