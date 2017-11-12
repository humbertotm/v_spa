// We will do our simplest api test right here.
// All that is aimed to be accomplished with this simple test is to
// get the post items from our mock api and store them in our app's state.

// We will start experimenting with the RxJS library to begin working with streams.

/*
Lets begin by defining in plain English what the flow to be followed will be.
We need to make an http request to a specific endpoint and then console.log
the response.
Since we are using redux, I should dispatch an action creator to trigger
this request.
Maybe I am jumping way ahead. How about I just make a request to the endpoint
and console.log the response for starters?
Lets begin by creating this script.
*/

import Rx from 'rxjs/Rx';
import axios from 'axios';

// Create an observable that emits the query string.
// Subscribe to that observable, and create a nested osbserver in the
// subscriber function that emits a request to the query string.

const requestUrlStream = Rx.Observable.of('http://localhost:3000/posts');

const responseStream = requestUrlStream
    .flatMap((requestUrl) => {
        return Rx.Observable.fromPromise(axios.get(requestUrl));
    });

responseStream.subscribe(response => {
    return console.log(response.data);
});

// Not working. Cannot find module rxjs/Rx when transpiling it.
// Principal suspect: I used an es version of the library, and when
// transpiled, it runs on ES5.