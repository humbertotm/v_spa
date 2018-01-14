export const LOG_IN = 'LOG_IN';

export default function logIn(userData) {
    return {
        type: 'LOG_IN',
        userData
    }
}