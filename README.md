[![Build Status](https://travis-ci.org/yottaawesome/brainlet.svg?branch=master)](https://travis-ci.org/yottaawesome/brainlet) ![Dependencies](https://david-dm.org/yottaawesome/brainlet.svg) ![Dev-Dependencies](https://david-dm.org/yottaawesome/brainlet/dev-status.svg)

# brainlet

## Introduction

A low-level simple event engine for JS web apps.

## Status

This project is being continually maintained.

## Installing

`npm i brainlet --save`

## Basic use

```javascript
import brainlet from 'brainlet';

// You define the events in your app
const eventNames = {
    SomeEvent: 'SomeEvent'
};

// This is a basic subscriber function
function subscriber(eventName, data) {
    console.log(eventName);
}

// Subscribe the above function
brainlet.subscribe(eventNames.SomeEvent, subscriber);
// Raise an event. This will call all subscribers for the SomeEvent event
brainlet.invokeEvent(eventNames.SomeEvent, { message: 'Hooray' });
// Don't forget to unsubscribe and clean up when you're done
brainlet.unsubscribe(eventNames.SomeEvent, subscriber);
// brainlet also caches event data, which can be retrieved as follows
const someEvent = brainlet.getCachedEventData(eventNames.SomeEvent);
```

## NPM commands

The following can be run with `npm run`.

* `build-dev`: Build the development version of `brainlet`.
* `build-prod`: Build the production version of `brainlet`.
* `start`: Runs webpack in watch mode.
* `test`: Runs the tests.
* `lint`: Lints the code.
