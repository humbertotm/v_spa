// This is a container component that will be connected to the redux store and
// will pass the approppriate props to the rendered components. This shall be
// the only component connected to the store in this component line.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from '../components/OpenButton';
import TestModal from '../components/TestModal';
import { toggleModal } from '../../redux/actions/modal';
import { connect } from 'react-redux';

class ModalButton extends Component {
    constructor() {
        super()
        this.formSubmit = this.formSubmit.bind(this)
    }

    formSubmit(values) {
        console.log(values)
    }

    render() {
        const { modalIsOpen, toggleModal } = this.props
        return(
            <div>
                <OpenButton toggleModal={toggleModal} />
                <TestModal modalIsOpen={modalIsOpen}
                           toggleModal={toggleModal}
                           formSubmit={this.formSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.modalIsOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => {
            dispatch(toggleModal())
        }
    }
}

// set proptypes
ModalButton.propTypes = {
    toggleModal: PropTypes.func,
    modalIsOpen: PropTypes.bool
}

// export default connected ModalButton
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalButton)