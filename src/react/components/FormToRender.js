// Package imports
import React, { Component } from 'react';

class FormToRender extends Component {
    render() {
        const { setFormToRender } = this.props

        return setFormToRender()
    }
}

export default FormToRender