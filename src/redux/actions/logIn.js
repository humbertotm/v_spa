export const LOG_IN = 'LOG_IN';

export function logIn(userData) {
    return {
        type: 'LOG_IN',
        userData
    }
}