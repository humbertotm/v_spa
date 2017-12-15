import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenButton from '../components/OpenButton';
import { connect } from 'react-redux';
import { session } from '../../redux/actions/session';

class SessionButton extends Component {
    constructor() {
        super()
        this.setButtonText = this.setButtonText.bind(this)
    }

    setButtonText() {
        const { loggedIn } = this.props
        if(loggedIn) return 'Log out'
        return 'Log in!'
    }

    render() {
        const { toggleSession, loggedIn } = this.props
        return(
            <div>
                <OpenButton actionToPerform={toggleSession}
                            buttonText={this.setButtonText()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSession: () => {
            dispatch(session())
        }
    }
}

SessionButton.propTypes = {
    loggedIn: PropTypes.bool,
    toggleSession: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionButton)