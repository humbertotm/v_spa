import { EMAIL_REGEX } from '../../utils/constantGlossary';

function isValidPassword(password) {
    if(password.length < 8) return false
    return true
}

function isValidEmail(email) {
    return EMAIL_REGEX.test(email)
}

export default function logInSyncValidate(values) {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email required.'
    } else if(!isValidEmail(values.email)) {
        errors.email = 'Invalid email.'
    }

    if(!values.password) {
        errors.password = 'Password required.'
    } else if (!isValidPassword(values.password)) {
        errors.password = 'Invalid password.'
    }

    return errors
}