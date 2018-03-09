export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// ENDPOINTS
export const TEST_API_BASE_DEV_URL = 'http://localhost:3000'

export const signupEndpoint = TEST_API_BASE_DEV_URL + '/signup'

export const loginEndpoint = TEST_API_BASE_DEV_URL + '/login'

export const passwordResetEndpoint = TEST_API_BASE_DEV_URL + '/resetpassword'