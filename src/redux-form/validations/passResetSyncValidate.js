import { isValidEmail } from './sessionFormSyncValidate';

export default function passResetSyncValidate(values) {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email required.'
    } else if(!isValidEmail(values.email)) {
        errors.email = 'Invalid email.'
    }

    return errors
}