import axios from 'axios';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import logInSyncValidate from '../validations/logInSync';
import { SubmissionError } from 'redux-form';
import submitValidate from '../validations/submitValidate';
import logIn from '../../redux/actions/logIn';

class LogInForm extends Component {
    constructor() {
        super()
        this.renderField = this.renderField.bind(this)
        this.submitValidate = this.submitValidate.bind(this)
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

    // Refactor to pass this as prop.
    submitValidate(values, dispatch) {
        return axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                email: values.email,
                password: values.password
            }
        })
        .then(response => {
                dispatch(logIn(response.data));
            }).catch(error => {
                // if the response status != 200
                if(error.response) {
                    console.log('error.response')
                    console.log(error.response)
                    throw new SubmissionError({
                        _error: 'Invalid email/password combination.'
                    })
                // Request made but no response received
                } else if (error.request) {
                    console.log('error.request')
                    console.log(error.request)
                    dispatch(setErrorMessage('No response received.'))
                // Something happended setting up the request.
                } else {
                    console.log('error')
                    console.log(error)
                    dispatch(setErrorMessage('Error on request.'))
                }
            })
        }

    render() {
        const { handleSubmit, pristine, reset, submitting, error } = this.props
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
            </form>
        );
    }
}

export default reduxForm({
    form: 'test',
    validate: logInSyncValidate
})(LogInForm)