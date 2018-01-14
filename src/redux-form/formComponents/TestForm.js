import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import logInSyncValidate from '../validations/logInSync';
import submitValidate from '../validations/submitValidate';

class TestForm extends Component {
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

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return(
            <form onSubmit={handleSubmit(submitValidate)}>
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
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'test',
    validate: logInSyncValidate
})(TestForm)