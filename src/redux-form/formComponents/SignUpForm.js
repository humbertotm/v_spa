import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import signUpSyncValidate from '../validations/signUpSyncValidate';
import { renderField } from '../formUtils/renderField';

class SignUpForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting, error,
                currentFormIs, setFormPurpose, submitValidate } = this.props

        return(
            <form onSubmit={handleSubmit(submitValidate)}>
                <Field
                    name='email'
                    type='email'
                    component={renderField}
                    label='Email' />
                <Field
                    name='password'
                    type='password'
                    component={renderField}
                    label='Password' />
                <Field
                    name='passwordConf'
                    type='password'
                    component={renderField}
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
