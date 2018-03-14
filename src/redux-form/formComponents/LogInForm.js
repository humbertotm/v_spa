// Package imports
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// Form validations
import { logInSyncValidate } from '../validations/logInSyncValidate';

// Form utils
import { renderField } from '../formUtils/renderField';

class LogInForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting, error,
                currentFormIs, toggleModal, submitValidate } = this.props

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
