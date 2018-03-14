// Package imports
import axios from 'axios';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

// Action creators
import { setErrorMessage } from '../../redux/actions/setErrorMessage';
import { setSuccessMessage } from '../../redux/actions/setSuccessMessage';

// Form validations
import { passResetSyncValidate } from '../validations/passResetSyncValidate';

// Form utils
// import { renderField } from '../formUtils/renderField';

// Constants
import { passwordResetEndpoint } from '../../utils/constantGlossary';

class ResetPasswordForm extends Component {
    constructor() {
        super()
        this.renderField = this.renderField.bind(this)
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
        const endpoint = passwordResetEndpoint

        return this.callApi(endpoint, values)
            .then(response => {
                this.handleSuccessfulResponse(response, dispatch)
            })
            .catch(error => {
                this.handleErrorResponse(error, dispatch)
            })
    }

    handleSuccessfulResponse(response, dispatch) {
        dispatch(setSuccessMessage(response.data));
    }

    handleErrorResponse(error, dispatch) {
        if(error.response) {
            console.log('Reser password error.response');
            console.log(error.response.satuts);
            this.handleErrorForHttpStatus(error.response.status);
        } else if(error.request) {
            console.log('error.request password reset')
            dispatch(setErrorMessage('No response received.'))
        } else {
            console.log('error password reset')
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
            _error: 'Some shit I have not decided how to handle happened in pass reset.'
        })
    }

    render() {
        const { handleSubmit, pristine, reset,
                submitting, error } = this.props

        return(
            <form onSubmit={handleSubmit(this.submitValidate)}>
                <Field
                    name='email'
                    type='email'
                    component={this.renderField}
                    label='Email' />
                { error && <strong>{error}</strong> }
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'resetPassword',
    validate: passResetSyncValidate
})(ResetPasswordForm)