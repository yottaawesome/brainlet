# brainlet

A low-level simple state dictionary and event engine for JS web apps.

## Installing

`npm i brainlet --save`

## Rationale

`brainlet` is intended to easily facilitate communication between components using a simple subscriber/publisher model. It is particularly effective for small scale SPAs in which something like `redux` simply adds too much complexity, but where components still need to communicate without having to pass props through a deeply nested hierarchy. `brainlet` can also be used to store application state using the `AppState.setStateData()` and `AppState.getStateData()` functions.

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
