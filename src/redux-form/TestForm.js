import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TestForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>Name</label>
                    <Field name='firstName' component='input' type='text' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'test'
})(TestForm)