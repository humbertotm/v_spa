import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { TEST_API_BASE_DEV_URL } from '../../utils/constantGlossary';
import logIn from '../../redux/actions/logIn';
import setErrorMessage from '../../redux/actions/setErrorMessage';

function callApi(values) {
    return axios({
        method: 'post',
        url: TEST_API_BASE_DEV_URL + '/login',
        data: {
            email: values.email,
            password: values.password
        }
    })
}

export default function submitValidate(values, dispatch) {
    callApi(values)
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