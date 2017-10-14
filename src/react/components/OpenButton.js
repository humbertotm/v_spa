import React, { Component } from 'react';

class OpenButton extends Component {
    render() {
        const { toggleModal } = this.props
        return(
            <div>
                <button onClick={toggleModal} type="button">Open Test Modal</button>
            </div>
        );
    }
}

export default OpenButton
