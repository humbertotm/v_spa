import Rx from 'rxjs/Rx';
import axios from 'axios';

// Create an observable that emits the query string.
// Subscribe to that observable, and create a nested osbserver in the
// subscriber function that emits a request to the query string.

// Call Api symbol
export const CALL_API = Symbol('Call Api');

/*
const requestUrlStream = Rx.Observable.of('http://localhost:3000/posts');

const responseStream = requestUrlStream
    .flatMap((requestUrl) => {
        return Rx.Observable.fromPromise(axios.get(requestUrl));
    });

responseStream.subscribe(response => {
    // return console.log(response.data);
    return response.status;
});
*/

export default store => next => action => {
    const callApi = action[CALL_API];
    if(callApi === undefined) return next(action);

    console.log('Firing api middleware.');


    // >> Store action types in variables
    const { types } = callApi;
    console.log(types);

    const actionWith = (data) => {
        // return an action with the pertinent data
        const finalAction = Object.assign({}, action, {
            type: data
        })
        console.log('actionWith called with ' + data)
        delete finalAction[CALL_API]
        console.log(finalAction)
        return finalAction
    }

    const [ requestType, successType, failureType ] = types

    next(actionWith(requestType));

    return axios.get('http://localhost:3000/posts')
        .then(response => {
            console.log(response.status);
            return next(actionWith(successType));
        }).catch(error => {
            console.log(error.response.status);
            return next(actionWith(failureType));
        });
}

/*
export default store => next => action => {
    const callApi = action[CALL_API];
    if(callApi === undefined) return next(action);

    console.log('Firing api middleware.');


    // >> Store action types in variables
    const { types } = callApi;
    console.log(types);

    const actionWith = (data) => {
        // return an action with the pertinent data
        const finalAction = Object.assign({}, action, {
            type: data
        })
        console.log('actionWith called with ' + data)
        delete finalAction[CALL_API]
        console.log(finalAction)
        return finalAction
    }

    const [ requestType, successType, failureType ] = types
    next(actionWith(requestType));

    const response = 200;
    if(response >= 400) {
        // pass a failure action to next function in middleware chain
        return next(actionWith(failureType));
    }

    return next(actionWith(successType));
}
*/