# brainlet

A low-level simple state and event engine for JS web apps.

## Installing

`npm i brainlet --save`

## Use

```javascript
import { AppState } from 'brainlet';

const events = {
    LOGIN: "onLogin",
    LOGOUT: "onLogout",
}

class Subscriber {
    // the handler must match the value of the event
    onLogin(event, data) {
        console.log(`User ${data.name} logged in`);
    }
}

let objToSubscribe = new Subscriber();

// this can be a global or be more localised
let appState = new AppState();

// subscribe to an event
appState.subscribe(objToSubscribe, events.LOGIN);

// raise an event
appState.raiseEvent(events.LOGIN, { name: 'Jean Baudrillard' });

// clean up
appState.unsubscribe(objToSubscribe);
```
