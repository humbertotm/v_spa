export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE'

export function setSuccessMesage(message) {
    return {
        type: SET_SUCCESS_MESSAGE,
        message
    }
}