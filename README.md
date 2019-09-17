# brainlet

## Introduction

A low-level simple state dictionary and event engine for JS web apps. `brainlet` is intended to easily facilitate communication between components for small-scale or medium-scale component-based SPAs (like React<sup>1</sup>) using a simple subscriber/publisher model. `brainlet` can also be used to store application state using the `AppState.setStateData()` and `AppState.getStateData()` functions.

## Status

This project is being continually maintained.

## Installing

`npm i brainlet --save`

## Basic use

```javascript
import { AppState } from 'brainlet';

// our event keys
const events = {
    LOGIN: "onLogin",
    LOGOUT: "onLogout",
}

// our state keys
const state = {
    SERVER_DATA: "serverData"
}

class Subscriber {
    // the handler name must match the value of the event,
    // e.g. onLogin() must be defined as per events.LOGIN
    onLogin(event, data) {
        console.log(`User ${data.name} logged in`);

        // let's retrieve the state data in SERVER_DATA
        let serverData = appState.getStateData(state.SERVER_DATA);
        console.log(`Baudrillard says: ${serverData.msg}`);
    }
}

// this can be a global variable, or localised to a related
// set of modules or components for a better-fitting abstraction.
let appState = new AppState();

// let's store some application state using SERVER_DATA
appState.setStateData(state.SERVER_DATA, { msg: 'hyperreality' });

// subscribe to an event
let objToSubscribe = new Subscriber();
appState.subscribe(objToSubscribe, events.LOGIN);

// raise an event, the second parameter is the optional data subscribers will receive
appState.raiseEvent(events.LOGIN, { name: 'Jean Baudrillard' });

// clean up, don't forget this step!
appState.unsubscribe(objToSubscribe);
```

## TODO

Add a proper unit testing framework to replace the crude one in place.

<hr />

<sup>1</sup> As of [16.3.0](https://reactjs.org/blog/2018/03/29/react-v-16-3.html), provides a new and stable `context` API that allows sharing of data between components, and you should consider using this. Don't add Redux for component communication; Redux's use case is robust, scalable and predictable management for complex global application state, not inter-component communication. There's an important distinction in those two concepts there that is often misunderstood.
