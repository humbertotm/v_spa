export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export function setErrorMessage(error) {
    return {
        type: SET_ERROR_MESSAGE,
        error
    }
}