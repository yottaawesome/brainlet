[![Build Status](https://travis-ci.org/yottaawesome/brainlet.svg?branch=master)](https://travis-ci.org/yottaawesome/brainlet) ![Dependencies](https://david-dm.org/yottaawesome/brainlet.svg) ![Dev-Dependencies](https://david-dm.org/yottaawesome/brainlet/dev-status.svg)

# brainlet

## Introduction

A low-level simple event engine for JS web apps. This is version 2.0.0 of `brainlet`, which will soon replace version 1.x.x, which is the current NPM version.

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

function subscriber(eventName, data) {
    console.log(eventName);
}

brainlet.subscribe(eventNames.SomeEvent, subscriber);
brainlet.invokeEvent(eventNames.SomeEvent, { message: 'Hooray' });
brainlet.unsubscribe(eventNames.SomeEvent, subscriber);

// brainlet caches event data, which can be retrieved as follows
const someEvent = brainlet.getCachedEventData(eventNames.SomeEvent);
```

## NPM commands

The following can be run with `npm run`.

* `build-dev`: Build the development version of `brainlet`.
* `build-prod`: Build the production version of `brainlet`.
* `start`: Runs webpack in watch mode.
* `test`: Lints the code.
* `lint`: Lints the code.
