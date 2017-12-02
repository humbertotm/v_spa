import { REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE } from '../actions/mockApiCall';

export function entities(state = {
    posts: [{id: '1', name: 'one'}, {id: '2', name: 'two'}]
}, action) {
    switch(action.type) {
        case REQUEST_TYPE:
            return Object.assign({}, state, {
                posts: []
            })

        case SUCCESS_TYPE:
            return Object.assign({}, state, {
                posts: action.data
            })

        case FAILURE_TYPE:
            return Object.assing({}, state, {
                posts: action.error
            })

        default:
            return state
    }
}

