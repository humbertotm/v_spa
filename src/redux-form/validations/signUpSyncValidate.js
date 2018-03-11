import { EMAIL_REGEX } from '../../utils/constantGlossary';
import { isValidPassword, isValidEmail } from './logInSyncValidate';

export default function signUpSyncValidate(values) {
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

    if(!values.passwordConf) {
        errors.passwordConf = 'Password confirmation required.'
    } else if(!isValidPassword(values.passwordConf) || values.passwordConf != values.password) {
        errors.passwordConf = 'Password confirmation does not match password.'
    }

    return errors
}